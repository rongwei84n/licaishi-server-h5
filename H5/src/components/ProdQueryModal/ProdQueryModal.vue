/*
 * @Author: 张浩然 
 * @Date: 2018-03-06 19:27:24 
 * @Last Modified by: 张浩然
 * @Last Modified time: 2018-03-07 00:11:59
 * 产品条件查询组件--此组件用于产品模块
 */

 <template>
    <div class="prodQueryModal">
        <div>
            <p class="title">产品期限</span>
                <div>
                    <span>不限</span>
                    <span>12个月以内</span>
                    <span>12个月</span>
                    <span>13-23个月</span>
                    <span>24个月</span>
                    <span>24个月以上</span>
                </div>
        </div>
        <div>
            <p class="title">预期收益</p>
            <div>
                <span>不限</span>
                <span>7%以内</span>
                <span>7%(包含)-8%</span>
                <span>8%(包含)-9%</span>
                <span>9%(包含)-10%</span>
                <span>10%及以上</span>
                <span>浮动</span>
            </div>
        </div>
        <div>
            <p class="title">付息方式</p>
            <div>
                <span>不限</span>
                <span>按月付息</span>
                <span>按季付息</span>
                <span>按半年付息</span>
                <span>按年付息</span>
                <span>到本期付息</span>
            </div>
        </div>
        <div class="footer-btn-content">
            <span class="reset">重置</span>
            <span class="confirm">确定</span>
        </div>
    </div>
</template>

<script type="es6">
export default {};
</script>

<style lang="stylus">
.prodQueryModal {
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;

    >div:not(:last-child) {
        flex: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #BFBFBF;

        .title {
            font-size: 14px;
            color: #333333;
            margin-bottom: 16px;
        }

        >div {
            flex: 1;

            >span {
                display: inline-block;
                padding: 4px 8px;
                margin: 4px;
                border: 1px solid #BFBFBF;
                border-radius: 16px;
            }
        }
    }

    .footer-btn-content {
        height: 34px;
        width: 100vw;
        display: flex;
        justify-content: space-around;
        align-items: center;

        >span {
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
        }

        .reset {
            background: #D8D8D8;
            color: #333333;
        }

        .confirm {
            background: #E10101;
            color: #FFFFFF;
        }
    }
}
</style>

 
 
