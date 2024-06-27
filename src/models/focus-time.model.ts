import { Schema, model } from 'mongoose';

const FocusTimeSchema = new Schema(
  {
    timeFrom: {
      type: String,
      require: true,
    },
    timeTo: {
      type: Date,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const focusTimeModel = model('FocusTime', FocusTimeSchema);
