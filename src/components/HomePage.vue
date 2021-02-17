<template>
  <div class="wrapper">
    <!-- header -->
    <b-navbar toggleable="lg" type="white">
      <b-collapse id="nav-collapse" is-nav>
        <!-- 导航栏按钮+ 主题图标 -->
        <b-navbar-nav class="navbar-frist">
          <b-nav-item>
            <b-navbar-brand href="#">
              <b-icon
                icon="text-left"
                font-scale="1.5"
                variant="primary"
                shift-v="-3"
                @click="isCollapse = !isCollapse"
              ></b-icon>
            </b-navbar-brand>
          </b-nav-item>

          <!-- ERP系统+图标 -->
          <b-nav-item>
            <b-navbar-brand class="header-title-icon">
              <b-icon
                icon="bicycle"
                font-scale="1.3"
                variant="info"
                rotate="45"
                animation="spin"
                class="mr-2"
                shift-v="-1"
              ></b-icon
              >Admin
            </b-navbar-brand>
          </b-nav-item>
        </b-navbar-nav>

        <!-- 搜索框+菜单按钮 -->
        <b-navbar-nav>
          <!-- 搜索框 -->
          <b-nav-form>
            <b-input-group>
              <b-form-input
                placeholder="Search"
                class="navbar-search"
              ></b-form-input>

              <b-input-group-append>
                <b-button
                  variant="link"
                  class="navbar-search"
                  style="color: #ccc"
                >
                  <b-icon icon="search" @click="search"
                /></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-nav-form>

          <!-- 菜单按钮 -->
          <b-nav-item-dropdown ml-2 text="Menu">
            <b-container fluid>
              <b-row class="list-row">
                <b-col style="background-color: #3f80ea"
                  ><h2>list1</h2>
                  <ul>
                    <li style="background-color: orange">list1-1</li>
                    <li>list1-2</li>
                    <li>list1-3</li>
                  </ul>
                </b-col>
                <b-col style="background-color: #ff9"
                  ><h2 style="background-color: #3f80ea">list2</h2>
                  <ul>
                    <li>list2-1</li>
                    <li style="background-color: orange">list2-2</li>
                    <li>list2-3</li>
                  </ul>
                </b-col>
                <b-col style="background-color: #3f80ea"
                  ><h2>list2</h2>
                  <ul>
                    <li>list3-1</li>
                    <li>list3-2</li>
                    <li style="background-color: orange">list3-3</li>
                  </ul>
                </b-col>
              </b-row>
            </b-container>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- header 右侧那一堆 -->
        <b-navbar-nav class="ml-auto">
          <!-- 新增按钮 -->
          <b-nav-item-dropdown>
            <template #button-content>
              <b-icon
                icon="plus-circle-fill"
                aria-hidden="true"
                variant="primary"
                font-scale="1"
                shift-v="0"
              ></b-icon>
            </template>
            <!-- 新增按钮下拉后的内容 -->
            <b-dropdown-group id="dropdown-group-1" header="Group 1">
              <b-dropdown-item-button>First</b-dropdown-item-button>
              <b-dropdown-item-button>Second</b-dropdown-item-button>
            </b-dropdown-group>
            <b-dropdown-group id="dropdown-group-2" header="Group 2">
              <b-dropdown-item-button>First</b-dropdown-item-button>
              <b-dropdown-item-button>Second</b-dropdown-item-button>
            </b-dropdown-group>
          </b-nav-item-dropdown>

          <!-- 帮助中心按钮 -->
          <b-nav-item-dropdown>
            <template #button-content>
              <b-icon icon="question-circle-fill" variant="primary"></b-icon>
              Help Center
            </template>
            <b-dropdown-item href="#">帮助一</b-dropdown-item>
            <b-dropdown-item href="#">帮助二</b-dropdown-item>
            <b-dropdown-item href="#">帮助三</b-dropdown-item>
            <b-dropdown-item href="#">帮助四</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- 我的消息按钮 -->
          <b-nav-item-dropdown>
            <template #button-content>
              <b-icon icon="bell-fill" variant="primary"></b-icon>
              Message
            </template>
            <b-dropdown-item href="#">消息1</b-dropdown-item>
            <b-dropdown-item href="#">消息2</b-dropdown-item>
            <b-dropdown-item href="#">消息3</b-dropdown-item>
            <b-dropdown-item href="#">消息4</b-dropdown-item>
          </b-nav-item-dropdown>

          <!-- 管理员按钮 -->
          <b-nav-item-dropdown id="dropdown-right" right text="Right align">
            <template #button-content>
              <b-icon icon="person-fill" variant="primary"></b-icon>
              User
            </template>
            <b-dropdown-item href="#">个人资料</b-dropdown-item>
            <b-dropdown-item href="#">管理员2</b-dropdown-item>
            <b-dropdown-item href="#">切换账号</b-dropdown-item>
            <b-dropdown-item @click.prevent="Logout">退出登录</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="main">
      <!-- 侧边导航栏 -->

      <el-menu
        class="el-menu-vertical"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        :collapse-transition="true"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">Card</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

      <b-row style="background-color:#ccc">
        <b-col>
          <!-- <b-row style="background-color: #6cc; height: 200px">Left Up </b-row> -->
          <ul>
            <li v-for="(item, index) in items" :key="index" style="float:left">
              <b-card
                :title="items[index].attributes.name"
                :img-src="items[index].attributes.image.attributes.url"
                :img-alt="items[index].attributes.image_format"
                :camera="items[index].attributes.camera"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="ml-2 mt-2"
              >
                <!-- <h5>camera: </h5> -->
              </b-card>
            </li>
          </ul>
        </b-col>
        <!-- <b-col cols="3" style="background-color: #ccc">Right</b-col> -->
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 导航栏是否默认折叠or展开
      isCollapse: true,
      items: [],
    };
  },
  methods: {
    Logout() {
      this.$router.push("/logout");
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(1);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      console.log(2);
    },
    search: function() {
      alert("Hello!");
    },
  },
  beforeCreate() {
    // const sessionToken = sessionStorage.getItem(this.$KEY_SESSION_TOKEN);
  },
  mounted() {
    const query = new this.$AV.Query("Document");

    query
      .find()
      .then((items) => {
        // const name = todo.get('name');
        this.items = items;
        console.log(this.items[0].attributes);
      })
      .catch((e) => {
        console.error(e);
      });
  },
};
</script>

<style scoped>
/* 字体 */
* {
  font-size: 10pt;
}
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.3em;
}
h3 {
  font-size: 1.2em;
}
h4 {
  font-size: 1.1em;
}
h5 {
  font-size: 1em;
}

/* header 标题+图标 */
.header-title-icon {
  font-size: 20px;
  margin-left: 15px;
  color: #007bff;
}

/* header搜索框 */
.navbar-search {
  background-color: #f3f6fb;
  color: #ccc;
  border-style: none;
}

/* 去掉点击后默认border颜色 */
.navbar-search:focus {
  box-shadow: none;
  background-color: #f3f6fb;
}

.navbar {
  border-bottom: 1px solid #ccc;
}

/* header-left-frist */
.navbar-frist {
  width: 260px;
}

/* 侧边导航栏 */
.el-menu-vertical {
  height: 100vh;
  float: left;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 260px;
}

.main {
  height: 100vh;
}
/* 菜单下拉框 */
.list-row {
  cursor: pointer;
  /* background-color: #3f80ea; */
  width: 600px;
  height: 350px;
}

ul {
  list-style-type: none;
  padding: 2px;
  margin: 0px;
}
</style>
