<!-- @micro example 多例子应用共存的布局示例 -->
<template>
    <div class="ivu-p">
        <Row>
            <Col span="11">
                <Card class="ivu-mb">
                    <MicroRoot appName="QiankunChildAppOne" />
                </Card>
            </Col>
            <Col span="11" offset="1">
                <Card class="ivu-mb">
                    <MicroRoot appName="QiankunChildAppTwo" />
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    import MicroRoot from '@/micro/patch/MicroRoot'
    export default {
        name: 'ExampleMultition',
        components: {
            MicroRoot
        }
    }
</script>
