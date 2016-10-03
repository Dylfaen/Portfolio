var type = function(targets) {


	var parity_tracker = true;
	setInterval(function() {
		parity_tracker = !parity_tracker;
	}, 500);

	console.log(targets.length);
	var start_delay = -25;

	var id_num = 0;

	var counter = 0;
	var initial_pause_delay = -20
	var pause_delay = initial_pause_delay;

	setInterval(function() {
		if(id_num == 0 && start_delay < 0) {
			$(targets[id_num].id).text('');
			if(parity_tracker == true) {
				$('#cursor').css('visibility', "hidden");

			} else  {
				$('#cursor').css('visibility', "visible");

			}
			start_delay++;

		} else if (counter > targets[id_num].text.length - 1) {
			if(id_num == targets.length - 1 || pause_delay <= 0) {
				$(targets[id_num].id).text(targets[id_num].text);
				if(parity_tracker == true) {
					$('#cursor').css('visibility', "hidden");
				} else {
					$('#cursor').css('visibility', "visible");

				}
				if(pause_delay <= 0) {
					pause_delay++;

				}

			} else {
				$(targets[id_num].id).text(targets[id_num].text);
				$('#cursor').css('visibility', "hidden");
				id_num++;
				counter = 0;
				pause_delay = initial_pause_delay;

			}
		} else {
			$(targets[id_num].id).text(targets[id_num].text.substring(0, counter));
			$('#cursor').css('visibility', "visible");
			counter++;

		}
	}, 100);
};

/*var text_arr = text.split('');
setInterval(function() {
	if(counter < 0) {
		if(parity_tracker == true) {
			$(target).html(' ');
		} else  {
			$(target).html('_');
		}
		counter ++;
	} else if(counter < text.length) {
		$(target).html(text.substring(0, counter) + '_');
		counter ++;
	} else {
		if(parity_tracker == true) {
			$(target).html(text + ' ');
		} else  {
			$(target).html(text + '_');
		}
	}
}, 100);
}*/
