# Dev by Sonthaya Nongncuh, microBlock IDE
import network
import usocket
import ujson

def trigger(key='', event='', value1='', value2='', value3=''):
    payload = ujson.dumps({
        "value1": value1, 
        "value2": value2,
        "value3": value3
    })
    s = usocket.socket()

    ai = usocket.getaddrinfo("maker.ifttt.com", 80)
    s.connect(ai[0][-1])

    s.write(b"POST /trigger/{}/with/key/{} HTTP/1.1\r\n".format(event, key))
    s.write(b"Host: maker.ifttt.com\r\n")
    s.write(b"Content-Type: application/json\r\n")
    s.write(b"Content-Length: {}\r\n".format(len(payload)))
    s.write(b"Connection: close\r\n")
    s.write(b"\r\n")
    s.write(payload)
    ros = s.read()
    s.close()
    print(ros)
    return ros
