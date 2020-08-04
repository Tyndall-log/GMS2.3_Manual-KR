// Publish project specific data
(function() {
rh = window.rh;
model = rh.model;
var defaultTopic = "Content.htm";
rh._.exports(defaultTopic);
rh.consts('DEFAULT_TOPIC', encodeURI("Content.htm"));
rh.consts('HOME_FILEPATH', encodeURI('index.htm'));
rh.consts('START_FILEPATH', encodeURI('index.htm'));
rh.consts('HELP_ID', 'e896fa3a-0fb4-4a94-b980-985d730dcbd9' || 'preview');
rh.consts('LNG_SUBSTR_SEARCH', 0);

model.publish(rh.consts('KEY_LNG_NAME'), "kr");
model.publish(rh.consts('KEY_DIR'), "ltr");
model.publish(rh.consts('KEY_LNG'), {"Contents":"Contents","Index":"색인","Search":"검색","Glossary":"용어집","Logo/Author":"Powered By","Show":"표시","Hide":"숨기기","SyncToc":"SyncToc","Prev":"Previous","Next":"Next","Disabled Prev":"<<","Disabled Next":">>","Separator":"|","OpenLinkInNewTab":"Open in new tab","SearchOptions":"Search Options","Loading":"Loading...","UnknownError":"Unknown error","Logo":"Logo","HomeButton":"Home","SearchPageTitle":"검색 결과","PreviousLabel":"Previous","NextLabel":"Next","TopicsNotFound":"No results found","JS_alert_LoadXmlFailed":"Failed to load XML file","JS_alert_InitDatabaseFailed":"Failed to initialize database","JS_alert_InvalidExpression_1":"The search string you typed is not valid.","Searching":"검색중...","Cancel":"Cancel","Canceled":"Canceled","ResultsFoundText":"%2를 검색한 결과 총 %1개의 항목을 찾았습니다.","SearchResultsPerScreen":"Search results per page","Back":"나가기","TableOfContents":"목차","IndexFilterKewords":"찾을 키워드","GlossaryFilterTerms":"알아볼 용어","ShowAll":"All","HideAll":"Hide All","ShowHide":"Show/Hide","IeCompatibilityErrorMsg":"This page cannot be viewed in Internet Explorer 8 or earlier version.","NoScriptErrorMsg":"Enable JavaScript support in the browser to view this page.","EnableAndSearch":"검색에 모든 단어 포함","HighlightSearchResults":"Highlight search results","Print":"Print","Filter":"Filter","SearchTitle":"검색","ContentFilterChanged":"Content filter is changed, search again","EndOfResults":"End of search results.","Reset":"Reset","NavTip":"Close","ToTopTip":"최상단으로 이동","ApplyTip":"Apply","SidebarToggleTip":"펼치기/접기","Copyright":"© Copyright 2019. All rights reserved.","FavoriteBoxTitle":"Favorites","setAsFavorites":"Add to Favorites","unsetAsFavorite":"Unset as favorite","favoritesNameLabel":"Name","favoritesLabel":"Favorites","setAsFavorite":"Set as Favorite","nofavoritesFound":"You have not marked any topic as favorite.","Welcome_header":"Welcome to our Help Center","Welcome_text":"What can we help you with today?","SearchButtonTitle":"Search for...","ShowTopicInContext":"Click here to see this page in full context","TopicHiddenText":"This topic is filtered out by the selected filters."});

model.publish(rh.consts('KEY_HEADER_TITLE'), "GameMaker Studio 2 안내서");
model.publish(rh.consts('PDF_FILE_NAME'), "");
model.publish(rh.consts('MAX_SEARCH_RESULTS'), "");
model.publish(rh.consts('KEY_SKIN_FOLDER_NAME'), "Charcoal_Grey");
model.publish(rh.consts('KEY_SUBSTR_SEARCH'), "");
})();
