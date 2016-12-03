## UI Components

Components should be small, simple, repeatable UI elements.

Note: Be sure to add any newly created components to the `index.js` file.


### Header
The app's header bar containing the logo and log in / sign up links.

### Footer
The app's footer containing copyright information and miscellaneous links.

### Alert
Generic alert bar

```
<Alert
  type="error"
  text="Please enter a valid name."
/>
```

#### Props
###### type
The type of alert to display. Accepts one of the following:
- error
- success
- info
- warning

###### text
The display message


### Button
Generic button component.

```
<Button
  style="btn-default"
  text="Search"
  onClick={() => { /* some function */ }}
/>
```

#### Props
###### style
Adds a style to the button. Accepts one of the following:
- btn-default
- btn-default-invert
- btn-lavender
- btn-lavender-invert
- btn-blue
- btn-blue-invert
- btn-green
- btn-green-invert
- btn-red
- btn-red-invert

###### text
Adds a text to the button.

###### onClick
Tells the button what to do when clicked.

### SearchInput
Generic search input component.

```
<SearchInput
  type="text"
  placeholder="my placeholder"
  onChange={() => { /* some function */ }}
/>
```

#### Props
###### type
Specifies the type of elements to display. Click [here](http://www.w3schools.com/tags/att_input_type.asp) to see all possible types.

###### placeholder
Displays a hint that describes the expected value of an input.

###### value (Optional)
Specifies the value of an input element

###### onChange
Updates the value in response to the user input.
