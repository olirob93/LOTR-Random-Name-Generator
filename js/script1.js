/* Lord of the rings word generator */


//UI Controller
var UIController = (function () {

	var domStrings = {
		firstname: '.firstName',
		secondname: '.secondName',
		inputbtn: '.add-btn',
		removebtn: '.btn-clear'				
	}

	var output = document.querySelector('.outputName');

	return {
		getinput: function() {
			return {
				// Get first name & second name
					firstname: document.querySelector(domStrings.firstname).value,
					secondname: document.querySelector(domStrings.secondname).value,

				};
		},		


		clearFields: function () {

			var fields, fieldsArr, outputData;

			fields = document.querySelectorAll(domStrings.firstname + ', ' + domStrings.secondname);

			fieldsArr =Array.prototype.slice.call(fields);
			

			fieldsArr.forEach(function (current, index, array) {
				current.value = "";		


			});

			fieldsArr[0].focus();

		},



		getdomStrings: function() {
			return domStrings;
		},

		getoutput: function() {
			return output;
		}

	}

})();


//Global App Controller
var Controller = (function (UICtrl) {

	var btnClicked;

	var generateEventListener = function () {

		if (btnClicked) {

			var DOM = UICtrl.getdomStrings();

			document.querySelector(DOM.inputbtn).addEventListener('click', ctrlAddItem);

			document.addEventListener('keypress', function(event) {
				if (event.keycode === 13 || event.which === 13) {
					ctrlAddItem();
				}
			});
		}
	}

	var removeEventListener = function () {
		

		if (btnClicked) {

			var DOM = UICtrl.getdomStrings();

			var RMD = UICtrl.getoutput();

			document.querySelector(DOM.removebtn).addEventListener('click', function () {

				UICtrl.clearFields();

				RMD.remove();

				window.location.reload();
			});	
		}	
	}


	var ctrlAddItem = function() {
		
		var input;

		if(btnClicked) {

			// 1. Get input data
			input = UICtrl.getinput()


			// get first letter & store as first initial and change to lowercase
			var firinit = input.firstname[0].toLowerCase(); 
			// Get second Letter of second name & store as second initial and change to lowercase
			var surinit = input.secondname[0].toLowerCase();


			// Loop Through first letter and show result if matches firstname
			switch (firinit) {
			case 'a':
				UICtrl.getoutput().appendChild(document.createTextNode('Aragon' + ' '));
			break;
			case 'b':
				UICtrl.getoutput().appendChild(document.createTextNode('Boromir' + ' '));
			break;
			case 'c':
				UICtrl.getoutput().appendChild(document.createTextNode('Carhadras Pass' + ' '));
			break;
			case 'd':
				UICtrl.getoutput().appendChild(document.createTextNode('Dwarves' + ' '));
			break;
			case 'e':
				UICtrl.getoutput().appendChild(document.createTextNode('Elves' + ' '));
			break;
			case 'f':
				UICtrl.getoutput().appendChild(document.createTextNode('Frodo' + ' '));
			break;
			case 'g':
				UICtrl.getoutput().appendChild(document.createTextNode('Gandalf' + ' '));
			break;
			case 'h':
				UICtrl.getoutput().appendChild(document.createTextNode('Hobbit' + ' '));
			break;
			case 'i':
				UICtrl.getoutput().appendChild(document.createTextNode('Isengard' + ' '));
			break;
			case 'j':
				UICtrl.getoutput().appendChild(document.createTextNode('Journey' + ' '));
			break;
			case 'k':
				UICtrl.getoutput().appendChild(document.createTextNode('King Of The Dead' + ' '));
			break;
			case 'l':
				UICtrl.getoutput().appendChild(document.createTextNode('Legolas' + ' '));
			break;
			case 'm':
				UICtrl.getoutput().appendChild(document.createTextNode('Merry' + ' '));
			break;
			case 'n':
				UICtrl.getoutput().appendChild(document.createTextNode('Nazgul' + ' '));
			break;
			case 'o':
				UICtrl.getoutput().appendChild(document.createTextNode('Oliphaunt' + ' '));
			break;
			case 'p':
				UICtrl.getoutput().appendChild(document.createTextNode('Pippin' + ' '));
			break;
			case 'q':
				UICtrl.getoutput().appendChild(document.createTextNode('Quenya' + ' '));
			break;
			case 'r':
				UICtrl.getoutput().appendChild(document.createTextNode('Ring' + ' '));
			break;
			case 's':
				UICtrl.getoutput().appendChild(document.createTextNode('Smegal' + ' '));
			break;
			case 't':
				UICtrl.getoutput().appendChild(document.createTextNode('Treebreard' + ' '));
			break;
			case 'u':
				UICtrl.getoutput().appendChild(document.createTextNode('Uru Kai' + ' '));
			break;
			case 'v':
				UICtrl.getoutput().appendChild(document.createTextNode('Veronda' + ' '));
			break;
			case 'w':
				UICtrl.getoutput().appendChild(document.createTextNode('Warg Rider' + ' '));
			break;
			case 'x':
				UICtrl.getoutput().appendChild(document.createTextNode('Xeroxing' + ' '));
			break;
			case 'y':
				UICtrl.getoutput().appendChild(document.createTextNode('Youthful' + ' '));
			break;
			case 'z':
				UICtrl.getoutput().appendChild(document.createTextNode('Zamin' + ' '));
			break;
			default:
				alert('Enter Valid name');
			break;
			}

			// Loop Through first letter and show result if matches for Surname
			switch (surinit) {
			case 'a':
				UICtrl.getoutput().appendChild(document.createTextNode('Warrior'));
			break;
			case 'b':
				UICtrl.getoutput().appendChild(document.createTextNode('Defiance'));
			break;
			case 'c':
				UICtrl.getoutput().appendChild(document.createTextNode('Wind'));
			break;
			case 'd':
				UICtrl.getoutput().appendChild(document.createTextNode('Midget'));
			break;
			case 'e':
				UICtrl.getoutput().appendChild(document.createTextNode('Drifter'));
			break;
			case 'f':
				UICtrl.getoutput().appendChild(document.createTextNode('The Loose One'));
			break;
			case 'g':
				UICtrl.getoutput().appendChild(document.createTextNode('Axe Wiedler'));
			break;
			case 'h':
				UICtrl.getoutput().appendChild(document.createTextNode('Holder'));
			break;
			case 'i':
				UICtrl.getoutput().appendChild(document.createTextNode('Pysic'));
			break;
			case 'j':
				UICtrl.getoutput().appendChild(document.createTextNode('Magical'));
			break;
			case 'k':
				UICtrl.getoutput().appendChild(document.createTextNode('Took'));
			break;
			case 'l':
				UICtrl.getoutput().appendChild(document.createTextNode('Witch King'));
			break
			case 'm':
				UICtrl.getoutput().appendChild(document.createTextNode('Conquest'));
			break;
			case 'n':
				UICtrl.getoutput().appendChild(document.createTextNode('Lord Saurman'));
			break;
			case 'o':
				UICtrl.getoutput().appendChild(document.createTextNode('Helmsdeep'));
			break;
			case 'p':
				UICtrl.getoutput().appendChild(document.createTextNode('Fangorn Forest'));
			break;
			case 'q':
				UICtrl.getoutput().appendChild(document.createTextNode('Mount Doom'));
			break;
			case 'r':
				UICtrl.getoutput().appendChild(document.createTextNode('Gimli'));
			break;
			case 's':
				UICtrl.getoutput().appendChild(document.createTextNode('The Tall One'));
			break;
			case 't':
				UICtrl.getoutput().appendChild(document.createTextNode('Mugwort'));
			break;
			case 'u':
				UICtrl.getoutput().appendChild(document.createTextNode('Terminator'));
			break;
			case 'v':
				UICtrl.getoutput().appendChild(document.createTextNode('The Rich One'));
			break;
			case 'w':
				UICtrl.getoutput().appendChild(document.createTextNode('The Greedy One'));
			break;
			case 'x':
				UICtrl.getoutput().appendChild(document.createTextNode('Ate All The Pies'));
			break;
			case 'y':
				UICtrl.getoutput().appendChild(document.createTextNode('Naughty'));
			break;
			case 'z':
				UICtrl.getoutput().appendChild(document.createTextNode('Destructive'));
			break;
			default:
				alert('Enter Valid name');
			break;
			}

			btnClicked = false;

		}
	
	}	

	return {
		init: function() {
			btnClicked = true;
			generateEventListener();
			
		},

		refresh: function () {
			btnClicked = true;
			removeEventListener();
		}
	}
})(UIController);

Controller.init();
Controller.refresh();
