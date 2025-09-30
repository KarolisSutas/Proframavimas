import { describe, expect, it } from "vitest";
import { add } from "./add.js";

it('should sumarise all number values in an array', () => {
    // Arrange
    const numbers = [1, 2, 3, 4];
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue, 0);

    // Act
    const result = add(numbers);

    // Assert
    expect(result).toBe(expectedResult);
});



describe('add function tests', () => {
    
    it('should sumarise all number values in an array', () => {
        // Arrange
        const numbers = [1, 2, 3, 4];
        const expectedResult = numbers.reduce(
            (prevValue, curValue) => prevValue + curValue, 0);
    
        // Act
        const result = add(numbers);
    
        // Assert
        expect(result).toBe(expectedResult);
    });

    it('turetu grazinti 0, jeigu paduodamas tuscias masyvas', () => {
        // Arrange
        const numbers = [];
    
        // Act
        const result = add(numbers);
    
        // Assert
        expect(result).toBe(0);
    });

    it('turetu grazinti teisinga suma, jeigu pateikiu skaicius kaip stringus', () => {
        // Arrange
        const numbers = ['1', '2'];
        const expectedResult = numbers.reduce(
            (prevValue, curValue) => +prevValue + +curValue, 0);

    
        // Act
        const result = add(numbers);
    
        // Assert
        expect(result).toBe(expectedResult);
    });


})