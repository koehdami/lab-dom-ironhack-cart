great work!

when creating a new HTML element from javascript we have a few options, the one you have used is perfectly valid, even if it's a little bit verbose, so don't worry about that:)

there is another way where you have to create less code, it is a HTML template approach, inserting variables values when you need them.
you could do something like this:

  productElement.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
