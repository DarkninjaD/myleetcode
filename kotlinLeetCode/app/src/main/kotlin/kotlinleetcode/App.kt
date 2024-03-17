/*
 * This Kotlin source file was generated by the Gradle 'init' task.
 */
package kotlinleetcode
import java.net.DatagramPacket
import java.net.DatagramSocket
import java.net.InetAddress
import kotlin.csv.csv



import validUtf8

class App {
    val greeting: String
        get() {
            return "Hello World!"
        }
}

import java.io.File
fun main() {
    var myFilePath = "YOUR/FILE/HERE.WHATEVER"
    var fileContent = readFromFile(File(myFilePath))
    println(fileContent)
}
fun readFromFile (filepath : File) : String {
    return if(filepath.exists()) {
        filepath.readText()
    } else {
        "File Does not exist"
    }
}

fun udpOverLocal(args: Array<String>) {
    // Create a DatagramSocket
    val socket = DatagramSocket()

    //   val address : InetAddress = 123.0.0.1
    // Create a DatagramPacket
    val packet = DatagramPacket(ByteArray(1024), 1024
        // "Hello, world!".toByteArray(),
        // 0,
        // "Hello, world!".toByteArray().size,
        // 127.0.0.1,
        // 8080
    )

    // Send the packet
    socket.send(packet)

    // Close the socket
    socket.close()
    }