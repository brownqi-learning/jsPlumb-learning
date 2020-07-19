<template>
  <div class="flow-chart-container" @drop="addStep($event)" @dragover="allowDrop($event)">
    <!--    <div id="test" style="height: 100px;width: 100px;box-shadow: 0 0 1px black"></div>-->
    <template
      v-for="(step,index) in task.transformation.step">
      <div
        :id="`${step.stepId}`"
        draggable="true"
        class="item">
        <div style="margin-top: 35px">{{step.name}}</div>
      </div>
    </template>
  </div>
</template>

<script>
  import {jsPlumb} from 'jsplumb'
  import {getUUID} from "@/utils/utils.js"

  const common = {
    maxConnections: -1,
    connector: 'Straight',
    endpoint: 'Dot',
    paintStyle: { stroke: '#999', strokeWidth: 3, fill: 'transparent',radius: 5 },
    hoverPaintStyle: {
      outlineStroke: 'lightblue'
    },
    connectorStyle: {
      outlineStroke: 'gray',
      strokeWidth: 1
    },
    connectorHoverStyle: {
      strokeWidth: 2
    },

  }

  export default {
    name: "flowChart",
    props: ['task'],
    data() {
      return {
        jp: null, // jsPlumb实例
        tempStep: {},
        flowChartTask: this.task,
        common: {
          isSource: true,
          isTarget: true,
        }
      }
    },
    methods: {
      init() {
        this.task.transformation.step.forEach((item) => {

          console.log(this.tempStep.stepType);
          this.addNode(item)


          console.log(123)
        })
      },
      addNode(item){
        switch (this.tempStep.stepType) {
          case 'Input':
            console.log('input')
            this.jp.addEndpoint(item.stepId, {
              anchors: ['Right'],
              isSource: true,
            },common);
            break;
          case 'Transform':
            console.log('transform')
            this.jp.addEndpoint(item.stepId, {
              anchors: ['Left'],
              isTarget: true,
            },common);
            this.jp.addEndpoint(item.stepId, {
              anchors: ['Right'],
              isSource: true,
            },common);
            break;
          case 'Output':
            console.log('output')
            this.jp.addEndpoint(item.stepId, {
              anchors: ['Left'],
              isTarget: true,
            },common);
            break;
        }
        this.jp.draggable(item.stepId, {
          containment: 'parent'
        })
      },
      addStep(event) {
        event.preventDefault();
        let tempStepInfo = {
          stepId: getUUID(),
          name: this.tempStep.name,
          type: this.tempStep.type,
          GUI: {
            xloc: event.layerX,
            yloc: event.layerY,
            draw: 'Y'
          }
        };
        this.task.transformation.step.push(tempStepInfo)
        this.$nextTick(() => {
          this.addNode(tempStepInfo)
        })
        console.log(this.flowChartTask.transformation.step)
      },
      allowDrop(event) {
        event.preventDefault();
      }
    },
    created() {
      this.$bus.on('dragstart', bus => {
        this.tempStep.name = bus.data.name;
        this.tempStep.type = bus.data.type;
        this.tempStep.stepType = bus.parent.data.type;
      })
    },
    mounted() {
      this.jp = jsPlumb.getInstance();
      this.$nextTick(() => {
        this.init()
      })
    }
  }
</script>

<style scoped>
  .flow-chart-container {
    width: 100%;
    height: 100%;
    position: relative;
    box-shadow: 0 0 10px gray;
    border-radius: 10px;
  }

  .item {
    box-shadow: 0 0 2px black;
    border-radius: 10px;
    width: 50px;
    height: 50px;
    position: absolute;
    line-height: 50px;
    font-size: 12px;
  }
</style>
