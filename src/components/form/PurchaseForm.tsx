export default function PurchaseForm() {
  return (
    <form action="">
      <label>
        Email
        <input type="email" placeholder="Email" />
      </label>

      <label>
        Country
        <input type="text" placeholder="Country" />
      </label>
      <label>
        Name
        <input type="text" />
      </label>

      {/* Address */}
      <label>
        Address
        <input type="text" placeholder="Address" />
      </label>
      <label>
        City
        <input type="text" placeholder="City" />
      </label>
      <label>
        state
        <input type="text" placeholder="state" />
      </label>
      <label>
        ZIP code
        <input type="text" />
      </label>
    </form>
  );
}
