/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step) {
    this.start = start;
    this.end = end;
    this.step = step
    this.length = arguments.length
};

Range.prototype.size = function () {
    if(this.length === 1) {
        return 'size is infinity'
    } else if (this.length === 2) {
        if(typeof this.step === 'undefined') {
            if(this.start > this.end) {
                return this.start - this.end + 1
            } else if(this.start === this.end) {
                return 0
            } else {
                return this.end - this.start +1
            }
        } else if(typeof this.end === 'undefined') {
            return 'size is infinity'
        }
    } else {
        var count = 0
        for(var i = this.start; i <= this.end; i += this.step) {
            count += 1;
        }
        return count;
    }
};

Range.prototype.each = function (callback) {
    if(this.length === 1) {
        var ele = this.start
        while(true) {
            callback(ele);
            ele++
        }
    } else if (this.length === 2) {
        if(typeof this.step === 'undefined') {
            if(this.start > this.end) {
                for(var i = this.start; i >= this.end; i--) {
                    callback(i)
                }
            } else if(this.start === this.end) {
                callback(this.start)
            } else {
                for(var i = this.start; i <= this.end; i++) {
                    callback(i)
                }
            }
        } else if(typeof this.end === 'undefined') {
            var ele = this.start
                while(true) {
                    callback(ele);
                    ele += this.step
                }
        }
    } else {
        for(var i = this.start; this.start > this.end ? i >= this.end : i <= this.end; i += this.step) {
            callback(i)
        }
    }
};

Range.prototype.includes = function (val) {
    if(this.length === 1) {
        if(val >= this.start) {
            return true
        }
    } else if (this.length === 2) {
        if(typeof this.step === 'undefined') {
            if(this.start > this.end) {
                if(this.start > val && this.end < val) {
                    return true;
                }
            } else if(this.start === this.end) {
                if(this.start === val) {
                    return true
                }
            } else {
                if(this.start < val && this.end > val) {
                    return true;
                }
            }
        } else if(typeof this.end === 'undefined') {
            var ele = this.start
            if(step >= 0 && val >= this.start) {
                while(val >= ele) {
                    if(ele === val) {
                        return true
                    }
                    ele += this.step
                }
            } else if(step < 0 && val < this.start) {
                while(val <= ele) {
                    if(ele === val) {
                        return true
                    }
                    ele += this.step
                }
            }
        }
    } else {
        for(var i = this.start; this.start > this.end ? i >= this.end : i <= this.end; i += this.step) {
            if(val === i) {
                return true;
            }
        }
    }
    return false;
};

console.log("Who do we appreciate!?");
var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 evenNumbers.each(function(val){
   console.log(val+"!");
 });
 console.log(evenNumbers.size())      //should be 4
 console.log(evenNumbers.includes(2)) //should be true 
 console.log(evenNumbers.includes(3)) //should be false

