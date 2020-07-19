<template>
  <el-container style="height: 800px">
    <el-aside width="200px">
      <tools-tree></tools-tree>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <flowChart :task="task"></flowChart>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import toolsTree from "./toolsTree";
  import flowChart from "./flowChart";

  export default {
    name: "transformationConfiguration",
    data() {
      return {
        task: {
          taskName: '',
          taskId: '',
          taskCreator: '',
          taskCreateTime: '',
          transformation: {
            info: {
              name: '',
              description: '',
              extended_description: '',
              trans_version: '',
              trans_type: 'Normal',
              directory: '/',
              parameters: '',
              log: {
                transLogTable: {
                  connection: '',
                  schema: '',
                  table: '',
                  size_limit_lines: '',
                  interval: '',
                  timeout_days: '',
                  field: [
                    {id: '', enabled: '', name: ''},
                  ]
                },
                perfLogTable: {
                  connection: '',
                  schema: '',
                  table: '',
                  interval: '',
                  timeout_days: '',
                  field: [
                    {id: '', enabled: '', name: ''},
                  ]
                },
                channelLogTable: {
                  connection: '',
                  schema: '',
                  table: '',
                  timeout_days: '',
                  field: [
                    {id: '', enabled: '', name: ''},
                  ]
                },
                stepLogTable:{
                  connection: '',
                  schema: '',
                  table: '',
                  timeout_days: '',
                  field: [
                    {id: '', enabled: '', name: ''},
                  ]
                },
                metricsLogTable:{
                  connection: '',
                  schema: '',
                  table: '',
                  timeout_days: '',
                  field: [
                    {id: '', enabled: '', name: ''},
                  ]
                }
              },
              maxdate:{
                connection:'',
                table:'',
                field:'',
                offset:'0.0',
                maxdiff:'0.0'
              },
              size_rowset:'10000',
              sleep_time_empty:'50',
              sleep_time_full:'50',
              unique_connections:'N',
              feedback_shown:'Y',
              feedback_size:'50000',
              using_thread_priorities:'Y',
              shared_objects_file:'',
              capture_step_performance:'N',
              step_performance_capturing_delay:'1000',
              step_performance_capturing_size_limit:'100',
              dependencies:'',
              partitionschemas:'',
              slaveservers:'',
              clusterschemas:'',
              created_user:'',
              created_date:'',
              modified_user:'',
              modified_date:'',
              key_for_session_key:'',
              is_key_private:'N'
            },
            notepads:{},
            connection:[
              {
                name:''
              }
            ],
            order:{
              hop:[]
            },
            step:[
            ],
            step_error_handling:{},
            slaveStepCopyPartitionDistribution:{},
            slave_transformation:'N'
          }
        }
      }
    },
    components: {
      toolsTree,
      flowChart
    },
    methods:{
      test(){
        console.log(this.task.transformation.step)
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;

  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;

  }

  body > .el-container {
    margin-bottom: 40px;
  }


</style>
