if (self.CavalryLogger) { CavalryLogger.start_js(["P97gQ"]); }

__d("FBMorePager.react",["cx","OnVisible.react","React","getViewportDimensions","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(a,c){h.constructor.call(this,a,c),this.$4=function(){this.setState({visible:!0}),this.state.throttledCallback()}.bind(this),this.$2=function(){this.$1&&this.props.onMore&&this.props.onMore()}.bind(this),this.state={throttledCallback:b("throttle")(function(){return this.$2()}.bind(this),a.throttle),visible:!1}}a.prototype.UNSAFE_componentWillReceiveProps=function(a){this.$3(),this.props.throttle!==a.throttle&&this.setState({throttledCallback:b("throttle")(this.$2,a.throttle)})};a.prototype.UNSAFE_componentWillMount=function(){this.$1=!0};a.prototype.componentWillUnmount=function(){this.$1=!1};a.prototype.render=function(){return b("React").createElement("div",{className:"_3fv0"+(this.state.visible?" _3fv1":"")},b("React").createElement(b("OnVisible.react"),{buffer:this.props.buffer,onVisible:this.$4,ref:"onVisible"},this.props.children))};a.prototype.$3=function(){this.setState({visible:!1}),this.refs.onVisible&&this.refs.onVisible.reset()};a.defaultProps={buffer:Math.min(b("getViewportDimensions")().height,b("getViewportDimensions")().width)*2,throttle:1e3};e.exports=a}),null);
__d("ConnectionsPYMLTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:ConnectionsPYMLLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setLikeSource=function(a){this.$1.like_source=a;return this};a.prototype.setPageID=function(a){this.$1.page_id=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={event:!0,like_source:!0,page_id:!0};e.exports=a}),null);
__d("EgoActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({IMP:1,CLICK:2,CONVERSION:4,SUPPRESS:8,NEXT:16,ERROR:32,XOUT:24,NONE:0})}),null);
__d("EgoPageServiceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FAN:"fan",UNFAN:"unfan",PAGE_VIEW:"page_view",FRIEND_VIEW:"friend_view",SEE_ALL:"see_all",ADD_INTEREST:"add_interest",CONTEXT_ITEM:"tap_context_item",BOOST_POST:"tap_boost_post",WATCH_AS_PAGE:"watch_as_page",UNWATCH_AS_PAGE:"unwatch_as_page",SHOP_VIEW:"shop_view",MESSAGE:"message",FOLLOW:"follow",UNFOLLOW:"unfollow",SUBSCRIBE:"subscribe"})}),null);
__d("XPubcontentInteractionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/pubcontent/suggestions/interaction_logging/",{})}),null);
__d("PageFanning",["ActorURI","Animation","AsyncRequest","ConnectionsPYMLTypedLogger","CSS","DOM","EgoActionType","EgoPageServiceConstants","Parent","URI","XPubcontentInteractionLoggingController","$","collectDataAttributes"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={setFanStatus:function(a,c,d,e,f,i,j){__p&&__p();var k={ft:{}};a&&(k={ft:b("collectDataAttributes")(a,["ft"]).ft});var l=new(b("URI"))(window.location.href).getQueryData();d&&(l.ref==="pyml_feed"?new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("profile").setPageID(parseInt(c,10)).log():l.ref==="pyml_permalink"&&new(b("ConnectionsPYMLTypedLogger"))().setEvent("like_page").setLikeSource("post_permalink").setPageID(parseInt(c,10)).log());f=f||function(b){b=b.getPayload();if(!b||!a)return;b.reload?g.reloadOnFanStatusChanged():h(a,b)};l={fbpage_id:c,add:d,reload:e};j!=null&&Object.assign(l,j);Object.assign(l,k);c="/ajax/pages/fan_status.php";j!=null&&j.actor_id!=null&&(c=b("ActorURI").create(c,j.actor_id));e=new(b("AsyncRequest"))().setURI(c).setData(l).setNectarModuleDataSafe(a).setHandler(f);i&&e.setErrorHandler(i);e.send();if(j.fan_origin==="PSYM"&&d&&j.egodata!==null){k={q:j.egodata,action:b("EgoPageServiceConstants").FAN,action_type:b("EgoActionType").CONVERSION};new(b("AsyncRequest"))().setMethod("POST").setURI(b("XPubcontentInteractionLoggingController").getURIBuilder().getURI()).setData(k).send()}return!1},reloadOnFanStatusChanged:function(){var a=b("URI").getRequestURI();window.location.href=a},toggleLikeOnFanStatusChanged:function(a,c){var d=b("$")("liked_pages_like_action_"+a);a=b("$")("liked_pages_undo_action_"+a);b("CSS").conditionClass(d,"hidden_elem",c);b("CSS").conditionClass(a,"hidden_elem",!c)}};function h(a,c){var d=c.feedback;if(!d)return;b("Parent").byClass(a,"fbTimelineEscapeSectionItem")&&(a=b("Parent").byClass(a,"fan_status_inactive")||a);var e=b("DOM").create("span",{className:"fan_status_inactive"},d);a.parentNode.replaceChild(e,a);d=function(){c.can_repeat_action&&e.parentNode.replaceChild(a,e)};new(b("Animation"))(e).duration(3e3).checkpoint().to("backgroundColor","#FFFFFF").duration(1e3).ondone(d).go()}e.exports=g}),null);
__d("Duration.react",["React","ServerTime","clearTimeout","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=500,i=1e3,j=60,k=60;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;function a(a){g.constructor.call(this,a),this.state={duration:0}}a.prototype.UNSAFE_componentWillMount=function(){this.$2()};a.prototype.componentWillUnmount=function(){b("clearTimeout")(this.$1)};a.prototype.$2=function(){var a;this.props.useLocalTime?a=Date.now():a=b("ServerTime").getMillis();this.setState({duration:Math.max(a-this.props.startTime,0)});this.$1=b("setTimeout")(function(){return this.$2()}.bind(this),h)};a.prototype.render=function(){__p&&__p();var a=Math.floor(this.state.duration/i),c=a%j;a=Math.floor(a/j);var d=a%k;a=Math.floor(a/k);var e="";a>0&&(e=a+":");a=d+":";a.length<3&&e.length>0&&(a="0"+a);d=""+c;d.length<2&&(d="0"+d);return b("React").createElement("span",null,e,a,d)};a.defaultProps={useLocalTime:!1};e.exports=a}),null);
__d("LiveVideoIndicator.react",["cx","fbt","DateConsts","Duration.react","React","VideoConcurrentViewerCount.react","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){if(this.props.isPreview)return this.$1();var a,c;this.props.inBeeper?(a="_60yg",c="_60yf"):this.props.isRewound?(a="_1dvf",c="_1dvg"):(a="_5pe-",c="_2wrk");var d=!this.props.isRewound&&this.props.showElapsedTime&&this.props.startTime?b("React").createElement("span",{className:"_2nwf"},b("React").createElement(b("Duration.react"),{startTime:this.props.startTime*b("DateConsts").MS_PER_SEC,useLocalTime:!0})):null;return b("React").createElement("div",{className:b("joinClasses")((this.props.inline?"":"_3htz")+(this.props.inline?" _3qry":"")+(this.props.inline?"":" _2659")+(this.props.inline?"":" _530p")+" _4ubd _2lwf"+(this.props.isLive?" _3rno":"")+(this.props.compact?" _3eca":""))},b("React").createElement("div",{className:a,"data-testid":"live-indicator"},b("React").createElement("span",{className:c},this.$2(),d)),b("React").createElement(b("VideoConcurrentViewerCount.react"),{pageCount:this.props.pageCount,viewerCount:this.props.viewerCount}))};a.prototype.$2=function(){if(this.props.isBreakingNews)return h._("LIVE BREAKING");if(this.props.textOverride)return this.props.textOverride;return this.props.isPremiere?h._("PREMIERE"):h._("LIVE")};a.prototype.$1=function(){return b("React").createElement("div",{className:"_5vj"},b("React").createElement("div",{className:"_5vm"},b("React").createElement("span",{className:"_5vo"},h._("PREVIEW"))))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("LiveVideoIndicatorContainer.react",["FluxContainer","LiveVideoIndicator.react","LiveVideoPlayerDispatcher","LiveVideoPlayerStore","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").Component);g=c&&c.prototype;a.getStores=function(){return[b("LiveVideoPlayerStore")]};a.calculateState=function(a,c){a=b("LiveVideoPlayerStore").getIsRewound(c.playerID);return{isRewound:a}};function a(a){g.constructor.call(this,a),b("LiveVideoPlayerDispatcher").explicitlyRegisterStores([b("LiveVideoPlayerStore")])}a.prototype.render=function(){return b("React").createElement(b("LiveVideoIndicator.react"),{compact:this.props.compact,inline:this.props.inline,inBeeper:this.props.inBeeper,isAudio:this.props.isAudio,isBreakingNews:this.props.isBreakingNews,isLive:this.props.isLive,isPremiere:this.props.isPremiere,isPreview:this.props.isPreview,isRewound:this.state.isRewound,pageCount:this.props.pageCount,showElapsedTime:this.props.showElapsedTime,startTime:this.props.startTime,textOverride:this.props.textOverride,viewerCount:this.props.viewerCount})};e.exports=b("FluxContainer").create(a,{withProps:!0})}),null);