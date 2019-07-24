/**
 * Initialize the code editor for chart settings
 */
'use strict';
(function($){
	$(function(){
		if( $('#code_editor_page_json').length ) {
			var editorSettings = wp.codeEditor.defaultSettings ? _.clone( wp.codeEditor.defaultSettings ) : {};
			editorSettings.codemirror = _.extend(
				{},
				editorSettings.codemirror,
				{
					indentUnit: 2,
					tabSize: 2,
				}
			);
			var editor = wp.codeEditor.initialize( $('#code_editor_page_json'), editorSettings );
		}
	});
})(jQuery);
