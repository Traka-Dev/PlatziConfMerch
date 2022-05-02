import React from 'react'

export const handleSumTotal = cart => {
    const reducer = (acc, current) => acc + current.price
    const sum = cart.reduce(reducer, 0)
    return sum
}