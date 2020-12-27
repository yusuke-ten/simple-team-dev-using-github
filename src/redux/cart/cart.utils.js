

export const addItemToCart = (totalItemCount, cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    totalItemCount++;
    if (existingCartItem) {
        const newCartItems = cartItems.map(
            cartItem => (cartItem.id === cartItemToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        return { totalItemCount: totalItemCount, cartItems: newCartItems };
    }
    return {
        totalItemCount, cartItems: [...cartItems, { ...cartItemToAdd, quantity: 1 }]
    };
}

export const removeItemFromCart = (totalItemCount, cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem) {
        totalItemCount--;
        var newCartItems = cartItems.map(
            cartItem => (cartItem.id === cartItemToRemove.id) ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        newCartItems = newCartItems.filter(cartItem => cartItem.quantity !== 0)
        return { totalItemCount: totalItemCount, cartItems: newCartItems };
    }
    return {
        totalItemCount, cartItems: [...cartItems]
    };
}

export const clearItemFromCart = (totalItemCount, cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if (existingCartItem) {
        totalItemCount -= (cartItemToRemove.quantity);
        const newCartItems = cartItems.filter(
            cartItem => (cartItem.id !== cartItemToRemove.id)
        );
        return { totalItemCount: totalItemCount, cartItems: newCartItems };
    }
    return {
        totalItemCount, cartItems: [...cartItems]
    };
}