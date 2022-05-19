import Foundation

var a = readLine()

if let a = a {
    
    var array = a.components(separatedBy: " ")
    let solution = Int(array[0])! + Int(array[1])!
    print(solution)
}