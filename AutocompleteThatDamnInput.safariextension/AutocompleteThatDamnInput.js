function AutocompleteThatDamnInput (input) {
	input.removeAttribute('autocomplete');
}

function AutocompletePresentInputs () {
	var inputs = document.getElementsByTagName("input");
	for ( idx = 0; idx < inputs.length; idx++ ) {
		AutocompleteThatDamnInput(inputs.item(idx));
	}
}

function AutocompleteFutureInputs () {
	document.addEventListener("DOMNodeInsertedIntoDocument", function(event) {
		var node = event.target;
		if ( node.nodeName == "INPUT" ) {
			AutocompleteThatDamnInput(node);
		}
	}, true);
}

AutocompletePresentInputs();
AutocompleteFutureInputs();
