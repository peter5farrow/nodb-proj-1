# Component hierarchy

- DGBagBuilder
  - BagGraphic
  - DiscList
    - DiscInput
      - DiscInputBox
      - SpeedInputBox
      - StabilityInputBox
      - InputSubmitButton
    - DiscListHeader
    - DiscListRow
      - EditableRowModeButtons
      - EditableDiscCell
      - EditableSpeedCell
      - EditableStabilityCell

changing data:

-list of discs
-each disc's editable data (name, speed, stability)
-mode for each row (normal or editing)
-user input for new disc (name, speed, and stability)
-disc bag graphic

state:

-whole list(App)
-edit mode(DiscListRow)
-editable values for disc, speed, stability(DiscListRow)
-input values for disc, speed, stability(DiscInput)
