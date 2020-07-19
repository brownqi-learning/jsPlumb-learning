<template>
  <div>
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText"
      style="height: 60px;line-height: 60px"
    >
    </el-input>
    <el-tree :data="tools"
             :props="defaultProps"
             style="background-color: #D3DCE6;"
             default-expand-all
             :filter-node-method="filterNode"
             ref="toolsTree"
    >
      <div class="tree-node" slot-scope="{ node, data }">
        <div v-if="node.isLeaf" draggable="true" @dragstart="dragstart(node)" style="width: 200px;text-align: left">{{ node.label }}</div>
        <div v-else class="can-not-select">{{ node.label }}</div>
      </div>
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: "toolsTree",
    data() {
      return {
        filterText: '',
        tools: [{
          label: '输入',
          type: 'Input',
          children: [{
            label: '表输入',
            name:'表输入',
            type:'TableInput'
          }]
        }, {
          label: '转换',
          type: 'Transform',
          children: [{
            label: '增加常量',
            name:'增加常量',
            type:'Constant'
          }, ]
        }, {
          label: '输出',
          type: 'Output',
          children: [{
            label: '表输出',
            name: '表输出',
            type: 'TableOutput'
          }, ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      dragstart(node){
        console.log(node)
        this.$bus.emit('dragstart',node);
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      }
    },
    watch: {
      filterText(val) {
        this.$refs.toolsTree.filter(val);
      }
    },
  }
</script>

<style scoped>
  .tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .can-not-select{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
