(window["webpackJsonpproject2-task-manager"]=window["webpackJsonpproject2-task-manager"]||[]).push([[0],{133:function(e,t){},134:function(e,t){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(83),r=a.n(l),c=(a(90),a(7)),o=a(8),i=a(10),m=a(9),u=a(11),d=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col-xs-6 col-ms-6"},s.a.createElement("div",{className:"input-group mb-3"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search...","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("span",{className:"input-group-text",id:"basic-addon2"},"Find")))))}}]),t}(n.Component),p=a(84),h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onHandleChange=function(e){var t=e.target,n=t.name,s=t.value;"status"===n&&(s="true"===s),a.setState(Object(p.a)({},n,s))},a.onCloseForm=function(){a.props.onRecieveCloseTaskForm()},a.onSubmit=function(e){e.preventDefault(),console.log(a.state),a.props.onReceive(a.state),a.onClear(),a.onCloseForm()},a.onClear=function(){a.setState({name:"",status:!1}),a.onCloseForm()},a.state={id:"",name:"",status:"false"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.props.task&&this.setState({id:this.props.task.id,name:this.props.task.name,status:this.props.task.status})}},{key:"render",value:function(){this.state.id;return s.a.createElement("div",null,s.a.createElement("form",{className:"form-group  ",onSubmit:this.onSubmit},s.a.createElement("label",null,s.a.createElement("h2",null,"Task Option")),s.a.createElement("br",null),s.a.createElement("label",null,s.a.createElement("h3",null,"Name: ")),s.a.createElement("input",{type:"text",onChange:this.onHandleChange,value:this.state.name,name:"name",className:"form-control",placeholder:"","aria-describedby":"helpId"}),s.a.createElement("label",null,s.a.createElement("h3",null,"Status: ")),s.a.createElement("div",{className:"form-group text-center "},s.a.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onHandleChange},s.a.createElement("option",{value:!1},"Hidden"),s.a.createElement("option",{value:!0},"Active")),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-warning",type:"submit"},"Save"),s.a.createElement("button",{className:"btn btn-danger",type:"reset",onClick:this.onClear},"Cancel"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).changeStatus=function(){a.props.changeStatus(a.props.task.id)},a.deleteTask=function(){a.props.deleteTask(a.props.task.id)},a.changeTask=function(){a.props.changeTask(a.props.task.id)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.task,a=e.index;return s.a.createElement("tr",null,s.a.createElement("td",null,a+1),s.a.createElement("td",null,t.name),s.a.createElement("td",{className:"text-center"},s.a.createElement("span",{className:!0===t.status?" badge badge-success":" badge badge-danger",onClick:this.changeStatus},!0===t.status?"active":"hidden")),s.a.createElement("td",{className:"text-center"},s.a.createElement("div",{className:"btn-group",role:"group","aria-label":""},s.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:this.changeTask},"Change"),s.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.deleteTask},"Delete"))))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map((function(t,a){return s.a.createElement(b,{changeStatus:e.props.changeStatus,deleteTask:e.props.deleteTask,key:t.id,index:a,task:t,changeTask:e.props.changeTask})}));return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("table",{className:"table table-bordered"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Status"),s.a.createElement("th",null,"Action"))),s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null),s.a.createElement("td",null,s.a.createElement("input",{type:"text",className:"form-control",name:"","aria-describedby":"helpId",placeholder:""})),s.a.createElement("td",null,s.a.createElement("select",{className:"form-control",name:""},s.a.createElement("option",null,"All"),s.a.createElement("option",null,"Hidden"),s.a.createElement("option",null,"Active"))),s.a.createElement("td",null)),t)))}}]),t}(n.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"col-xs-6 col-ms-6"},s.a.createElement("select",{className:"form-control",name:""},s.a.createElement("option",null,"A-Z"),s.a.createElement("option",null,"Z-A"),s.a.createElement("option",null,"Show Active"),s.a.createElement("option",null,"Show Hidden"))))}}]),t}(n.Component),g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(m.a)(t).call(this,e))).generateDate=function(){var e=[{id:n.createID(),name:"html",status:!0},{id:n.createID(),name:"CSS",status:!1},{id:n.createID(),name:"Angular",status:!0}];console.log(e),n.setState({tasks:e}),localStorage.setItem("tasks",JSON.stringify(e))},n.randomString=function(){return a(91).generate()},n.createID=function(){return n.randomString()+"-"+n.randomString()},n.onReceive=function(e){var t=n.state.tasks;""===e.id?(e.id=n.createID(),t.push(e)):t[n.findIndex(e.id)]=e;n.setState({tasks:t,taskEditting:null}),localStorage.setItem("tasks",JSON.stringify(t))},n.ChangeDisplay=function(){n.setState({isDisplayForm:!n.state.isDisplayForm})},n.OnCloseTaskForm=function(){n.setState({isDisplayForm:!1})},n.OnShowTaskForm=function(){n.setState({isDisplayForm:!0})},n.changeStatus=function(e){var t=n.state.tasks,a=n.findIndex(e);-1!==a&&(t[a].status=!t[a].status),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))},n.deleteTask=function(e){var t=n.state.tasks,a=n.findIndex(e);-1!==a&&(t.splice(a,1),n.setState({tasks:t}),localStorage.setItem("tasks",JSON.stringify(t))),n.OnCloseTaskForm()},n.changeTask=function(e){n.OnShowTaskForm();var t=n.state.tasks[n.findIndex(e)];n.setState({taskEditting:t})},n.state={tasks:[],taskEditting:[],isDisplayForm:!1},n}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){if(localStorage&&localStorage.getItem("tasks")){var e=JSON.parse(localStorage.getItem("tasks"));this.setState({tasks:e})}}},{key:"findIndex",value:function(e){var t=this.state.tasks,a=-1;return t.map((function(t,n){e===t.id&&(a=n)})),a}},{key:"render",value:function(){var e=this.state,t=e.tasks,a=e.isDisplayForm,n=e.taskEditting,l=a?s.a.createElement(h,{onRecieveCloseTaskForm:this.OnCloseTaskForm,task:n,onReceive:this.onReceive}):"";return s.a.createElement("div",{className:"container border border-danger"},s.a.createElement("h1",{className:"text-center"},"Task Manager"),s.a.createElement("hr",null),s.a.createElement("div",{className:"row "},s.a.createElement("div",{className:!0===this.state.isDisplayForm?"col-xs-4 col-md-4  col-lg-4 ":""},l),s.a.createElement("div",{className:!0===this.state.isDisplayForm?"col-xs-8 col-md-8 col-lg-8 ":"col-xs-12 col-md-12 col-lg-12 "},s.a.createElement("p",null,s.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:this.ChangeDisplay,"aria-expanded":"false","aria-controls":"contentId"},"Add"),s.a.createElement("button",{className:"btn btn-danger",onClick:this.generateDate,type:"button","aria-expanded":"false"},"Generate Data")),s.a.createElement("div",{className:"row"},s.a.createElement(d,null),s.a.createElement(E,null)),s.a.createElement("div",{className:"row"},s.a.createElement(k,{changeStatus:this.changeStatus,tasks:t,deleteTask:this.deleteTask,changeTask:this.changeTask})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports=a(178)},90:function(e,t,a){},96:function(e,t){},98:function(e,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.75528dca.chunk.js.map