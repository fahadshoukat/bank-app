import React from "react";

const CreateAccount = () => {
  return (
    <form class="row g-3">
      <div class="col-md-4">
        <label for="validationDefault01" class="form-label">
          First name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          placeholder="Enter First Name"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">
          Last name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationDefault02"
          placeholder="Enter Last Name"
          required
        />
      </div>
      <div class="col-md-4">
        <label for="validationDefaultUsername" class="form-label">
          CNIC
        </label>
        <div class="input-group has-validation">
          <input
            type="number"
            class="form-control"
            id="validationDefaultUsername"
            placeholder="XXXXX-XXXXXXX-X"
            pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
            required
          />
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationDefault03" class="form-label">
          Account Number
        </label>
        <input
          type="number"
          class="form-control"
          id="validationDefault03"
          size={8}
          required
        />
      </div>
      <div class="col-md-3">
        <label for="validationDefault04" class="form-label">
          Account Type
        </label>
        <select
          class="form-select"
          id="validationDefault04"
          required
        >
          <option selected disabled value="">
            Choose Type
          </option>
          <option>Current</option>
          <option>Saving</option>
        </select>
      </div>
      <div class="col-md-3">
        <label for="validationDefault05" class="form-label">
          Amount
        </label>
        <input
          type="text"
          class="form-control"
          id="validationDefault05"
          min={3}
          required
        />
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
};

export default CreateAccount;
