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

-initial list of discs (preset or empty) and their corresponding data (name, speed, stability)

-mode for each row (normal or editing)

-user input for disc (name, speed, and stability)

-disc bag graphic

state:

-whole list

-edit mode

-input values for disc, speed, stability

-editable values for disc, speed, stability
