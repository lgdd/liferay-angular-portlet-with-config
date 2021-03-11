<%@ include file="/init.jsp" %>

<div id="<portlet:namespace />"></div>

<aui:script require="<%= mainRequire %>">
	main.default('#<portlet:namespace />', {
		heroId: "<%= heroId %>",
		heroName: "<%= heroName %>"
	});
</aui:script>