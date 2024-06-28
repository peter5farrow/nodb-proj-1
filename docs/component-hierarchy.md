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

-list of discs (preset or empty) and their corresponding data (name, speed, stability)

-mode for each row (normal or editing)

-user input for disc (name, speed, and stability)

-each row when edited

-disc bag graphic

state:

-whole list(App)

-edit mode(DiscListRow)

-editable values for disc, speed, stability(DiscListRow)

-input values for disc, speed, stability(DiscInput)