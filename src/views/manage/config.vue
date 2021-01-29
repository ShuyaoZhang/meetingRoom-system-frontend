<template>
    <div class="roomList">
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="small" label-width="70px">
            <el-button type="success" icon="el-icon-plus" @click="add" size="small" style="float:right">新增</el-button>
            <el-form-item label="名称：">
                <el-input v-model="formInline.roomName" placeholder="请填写名称" clearable></el-input>
            </el-form-item>
            <el-form-item label="建筑楼：">
                <el-select v-model="formInline.building" placeholder="请选择建筑楼" clearable>
                    <el-option v-for="item in buildingList" :label="item.buildingName" :value="item.id"></el-option>
                </el-select>
                <el-button type="primary" icon="el-icon-search" @click="query" class="query-button">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table v-loading="listLoading" :data="tableData" :cell-style="{padding:'2px'}"
            :header-cell-style="{background:'#f8f8f9',color:'#333','font-weight': '600'}">
            <el-table-column v-for="item in columns" :prop="item.prop" :label="item.label" align="center">
            </el-table-column>
            <el-table-column label="位置">
                <template slot-scope="scope">
                    {{scope.row.building |change(buildingList,'id','buildingName')}}{{scope.row.roomLocation}}
                </template>
            </el-table-column>
            <el-table-column prop="projector" label="设备">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.projector" size="small" class="tag">投影仪</el-tag>
                    <el-tag type="success" v-if="scope.row.display" size="small" class="tag">显示屏</el-tag>
                    <el-tag type="warning" v-if="scope.row.blackboard" size="small" class="tag">黑板</el-tag>
                    <el-tag type="danger" v-if="scope.row.whiteboard" size="small" class="tag">白板</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" icon="el-icon-edit" @click="edit(scope.row)">编辑</el-button>
                    <el-button type="text" icon="el-icon-delete" @click="remove(scope.row)" class="delete">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination class="pagination" @size-change="sizeChange" @current-change="currentChange"
            :current-page="formInline.page" :page-size="formInline.pageSize" :page-sizes="[10, 15, 20, 25]" background
            layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>

        <el-dialog :title="dialogType==1? '新增会议室' : '编辑会议室'" :visible.sync="dialogVisible" width="25%">
            <el-form :model="form" ref="form" :rules="formRules" size="small" label-position="right"
                label-width="110px">
                <el-form-item label="会议室名称：" prop="roomName">
                    <el-input v-model="form.roomName" style="width:300px" clearable></el-input>
                </el-form-item>
                <el-form-item label="建筑楼：" prop="building">
                    <el-select v-model="form.building" style="width:300px">
                        <el-option v-for="item in buildingList" :label="item.buildingName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="会议室编号：" prop="roomLocation">
                    <el-input v-model="form.roomLocation" style="width:300px" clearable></el-input>
                </el-form-item>
                <el-form-item label="容纳人数：" prop="roomNum">
                    <el-input v-model="form.roomNum" style="width:300px" clearable></el-input>
                </el-form-item>
                <el-form-item label="设备：" prop="equipment">
                    <el-checkbox-group v-model="equipment">
                        <el-checkbox v-for="(item,index) in projectorList" :label="item.id" :key="item.id">
                            {{item.projectorName}}</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="sure" size="small">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    import {
        buildingList,
        projectorList
    } from '@/utils/index.js'
    export default {
        data() {
            return {
                type: '',
                formInline: { // 查询关键字段
                    page: 1,
                    pageSize: 10
                },
                listLoading: false, // 表格是否加载
                tableData: [], // 表格数据
                total: 0, // 总条数
                buildingList: buildingList,
                projectorList: projectorList,
                dialogVisible: false, // 弹出框是否可见
                dialogType: 1, // 弹出框类型 1:新增；2：编辑
                form: {}, // 弹出框表单
                equipment: [],
                formRules: {
                    roomName: [{
                        required: true,
                        message: '请输入会议室名称',
                        trigger: 'change'
                    }],
                    building: [{
                        required: true,
                        message: '请选择建筑楼',
                        trigger: 'change'
                    }],
                    roomLocation: [{
                        required: true,
                        message: '请输入会议室编号',
                        trigger: 'change'
                    }],
                    roomNum: [{
                        required: true,
                        message: '请输入会议室容纳人数',
                        trigger: 'change'
                    }]
                },
                columns: [ // 列
                    {
                        label: '名称',
                        prop: 'roomName',
                    },
                    {
                        label: '容纳人数',
                        prop: 'roomNum',
                    }
                ]
            }
        },
        created() {
            this.getRoomList()
        },
        methods: {
            // 获取会议室列表
            getRoomList() {
                this.listLoading = true
                this.tableData = [{
                    id: 1,
                    roomName: '王小虎',
                    roomNum: 12,
                    roomLocation: '110',
                    projector: 1,
                    display: 0,
                    whiteboard: 1,
                    blackboard: 1,
                    building: 1,
                }, {
                    id: 2,
                    roomName: '王小虎',
                    roomNum: 12,
                    roomLocation: '110',
                    projector: 0,
                    display: 1,
                    whiteboard: 0,
                    blackboard: 1,
                    building: 2
                }, ]
                this.listLoading = false
                this.total = 32
            },
            // 新增
            add() {
                this.dialogVisible = true
                this.dialogType = 1
                this.equipment = []
                if (this.$refs['form']) {
                    this.$refs['form'].resetFields()
                }
            },
            // 更新
            edit(row) {
                this.dialogVisible = true
                this.dialogType = 2
                if (this.$refs['form']) {
                    this.$refs['form'].resetFields()
                }
                this.form = Object.assign({}, row)
                this.equipment = this.getArrByRow(row)
            },
            // 确定
            sure() {
                this.$refs['form'].validate((valid) => {
                    if (valid) {
                        let params = Object.assign({}, this.form,this.getRowByArr(this.equipment))
                        console.log(params)
                        //let request = this.dialogType == 1 ? 
                    }
                })
            },
            // 根据row返回数组
            getArrByRow(row) {
                var arr = []
                for (let i = 0; i < this.projectorList.length; i++) {
                    if (row[this.projectorList[i].field]) {
                        arr.push(i + 1)
                    }
                }
                return arr
            },
            // 根据数组返回row
            getRowByArr(arr){
                var obj = {}
                for (let i = 0; i < this.projectorList.length; i++) {
                    obj[this.projectorList[i].field] = arr.includes(i+1) ? 1 : 0
                }
                return obj
            },
            // 删除
            remove(row) {
                this.$confirm(`确定删除 【${row.roomName}】会议室？`, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    iconClass: 'el-icon-warning colorRed'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                }).catch(err => {});
            },
            // 查询
            query() {
                this.getRoomList()
            },
            // 每页条数改变
            sizeChange(val) {
                this.formInline.pageSize = val
                this.getRoomList()
            },
            // 当前页改变
            currentChange(val) {
                this.formInline.page = val
                this.getRoomList()
            },
        }
    }
</script>
<style lang="scss" scoped>

</style>