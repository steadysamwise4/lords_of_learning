const { Schema, model } = require('mongoose');

const multFactSchema = new Schema(
    {
        expression: {
            type: String,
            required: 'Please enter an expression!'
        },
        solution: {
            type: String,
            required: 'You must enter a solution!'
        },
    },
    {
        toJSON: {
            getters: true
        },
    }
)


const multiplicationSchema = new Schema(
  {
    facts: [multFactSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
);

thoughtSchema.virtual('factCount').get(function() {
  return this.facts.length;
});

const Multiplication = model('Multiplication', multiplicationSchema);

module.exports = Multiplication;
