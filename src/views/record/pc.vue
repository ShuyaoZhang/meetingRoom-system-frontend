<template>
    <div class="pcRecord">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-success"></i> 已通过</span>
                我的行程
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-error"></i> 已驳回</span>
                我的行程
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-loading"></i> 等待审批</span>
                我的行程
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        mounted() {},
        methods: {},
    }
</script>
<style lang="scss" scoped>

</style>