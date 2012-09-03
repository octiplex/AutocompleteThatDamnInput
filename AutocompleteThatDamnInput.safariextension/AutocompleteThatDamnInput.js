function AutocompleteThatDamnInput (input) {
	input.removeAttribute('autocomplete');
}

function AutocompleteAllDamnInputs () {
	var inputs = document.getElementsByTagName("input");
	for ( input in inputs ) {
		AutocompleteThatDamnInput(input);
	}
}

function AutocompleteAllDamnInputs () {
	document.addEventListener("DOMNodeInsertedIntoDocument", function(event) {
		var node = event.target;
		if ( node.nodeName == "INPUT" ) {
			AutocompleteThatDamnInput(node);
		}
	}, true);
}

AutocompleteAllDamnInputs();
