<template>
    <el-card style="margin-bottom:20px;">
        <div slot="header" class="clearfix">
            <h4>About author</h4>
        </div>

        <div class="user-profile">
            <div class="box-center">
                <img src="@/assets/images/Opera Snapshot_2019-10-03_160249_app.slack.com.png" class="image">
            </div>
            <div class="box-center">
                <h3 class="user-name text-center">Johnathon Doe</h3>
            </div>
        </div>

        <div class="user-bio">
            <div class="user-education user-bio-section">
                <div class="user-bio-section-header"><svg-icon icon-class="education" /><span>Description</span></div>
                <div class="user-bio-section-body">
                    <div class="text-muted">
                        {{description}}
                    </div>
                </div>
            </div>
        </div>
        <el-button type="primary">Full profile</el-button>
    </el-card>
</template>

<script>
    export default {
        name : "AboutAuthor",
        data(){
            return {
                circleUrl : "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
                description : "When Harry Potter and the Half-Blood Prince opens, the war against Voldemort has begun. The Wizarding world has split down the middle, and as the casualties mount, the effects even spill over onto the Muggles. Dumbledore is away from Hogwarts for long periods, and the Order of the Phoenix has suffered grievous losses. And yet, as in all wars, life goes on."
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box-center {
        margin: 0 auto;
        display: table;
    }

    .text-muted {
        color: #777;
    }

    .user-profile {
        .user-name {
            font-weight: bold;
        }

        .box-center {
            padding-top: 10px;
        }

        .user-role {
            padding-top: 10px;
            font-weight: 400;
            font-size: 14px;
        }

        .box-social {
            padding-top: 30px;

            .el-table {
                border-top: 1px solid #dfe6ec;
            }
        }

        .user-follow {
            padding-top: 20px;
        }
    }

    .user-bio {
        margin-top: 20px;
        color: #606266;

        span {
            padding-left: 4px;
        }

        .user-bio-section {
            font-size: 14px;
            padding: 15px 0;

            .user-bio-section-header {
                border-bottom: 1px solid #dfe6ec;
                padding-bottom: 10px;
                margin-bottom: 10px;
                font-weight: bold;
            }
        }
    }
</style>