module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      first_name: String,
      last_name: String,
      email: String,
      contact_no: String,
      city: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Customer = mongoose.model("customer", schema);
  return Customer;
};
