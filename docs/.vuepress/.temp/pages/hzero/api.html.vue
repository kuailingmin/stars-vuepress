<template><div><h1 id="接口权限配置" tabindex="-1"><a class="header-anchor" href="#接口权限配置"><span>接口权限配置</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">说明</p>
<p>汉得提供了一套接口权限配置方案，此方案根据菜单维度来分配！</p>
</div>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h3>
<ol>
<li>
<p>首先我们用超级管理员账户登录</p>
</li>
<li>
<p>打开角色管理，路径：系统管理 -&gt; 角色管理 -&gt; 角色管理</p>
<p>打开菜单管理：路径：系统管理 -&gt; 菜单管理 -&gt; 菜单管理</p>
</li>
</ol>
<h3 id="第一步-添加接口权限项" tabindex="-1"><a class="header-anchor" href="#第一步-添加接口权限项"><span>第一步：添加接口权限项</span></a></h3>
<p>首先进入菜单管理，选择租户层的菜单数据</p>
<p><img src="@source/images/api1.png" alt=""></p>
<p>每个菜单后面都有操作项，其中有一个权限集的操作：如下图</p>
<p><img src="@source/images/api3.png" alt=""></p>
<p>进入权限集的页面如下图:</p>
<p><img src="@source/images/api4.png" alt=""></p>
<p>右上角会看到一个“新建”按钮，点击新建</p>
<p><img src="@source/images/api2.png" alt=""></p>
<p>有3个参数让你编辑</p>
<ol>
<li>“权限集编码”：当你打开权限集的时候，就已经有一条“默认权限集”的数据，这条数据中的权限集编码可以直接复制到新建的地方，把最后一位替换掉新的自定义命名</li>
<li>“权限集名称”：自定义</li>
<li>“序号”： 接口数据的排序号</li>
</ol>
<p>在填写“权限集名称”的时候，需要支持国际化
<img src="@source/images/api5.png" alt=""></p>
<p>填好之后点击保存就会创建一个新的权限</p>
<h3 id="第二步-接口权限绑定" tabindex="-1"><a class="header-anchor" href="#第二步-接口权限绑定"><span>第二步：接口权限绑定</span></a></h3>
<p>进入角色管理，找到对应的角色的权限分配，如下图：
<img src="@source/images/api6.png" alt=""></p>
<p>点击分配权限会展示，如下图：</p>
<p><img src="@source/images/api7.png" alt=""></p>
<p>在这里会看到上面刚创建的权限配置，只不过默认是“未选择”状态，只有勾选了这个账户对应的接口权限才能形成链接。</p>
<h3 id="第三步-接口权限与真实接口绑定" tabindex="-1"><a class="header-anchor" href="#第三步-接口权限与真实接口绑定"><span>第三步：接口权限与真实接口绑定</span></a></h3>
<p>进入“菜单配置”，从菜单操作项中点击“权限集”</p>
<p><img src="@source/images/api8.png" alt=""></p>
<ol>
<li>在每个“权限类型”为 API的操作项中，点击“权限”的操作</li>
</ol>
<p><img src="@source/images/api9.png" alt=""></p>
<ol start="2">
<li>点击“添加权限”</li>
</ol>
<p><img src="@source/images/api10.png" alt=""></p>
<p>在这里通过“描述/路径”搜索对应的后端接口，<font color=red face="黑体">前提是后端API已经成功发布当前的配置环境</font>，点击确定后就成功把真实API绑定到权限集</p>
</div></template>


