from fastapi import FastAPI

app = FastAPI()


@app.get('/')
def say_hello():
    return {'code': 200, 'message': 'hello, world!'}

@app.get('/userinfo')
def say_hello():
    return {'name':'wuming','age': 55, 'message': 'hello, aming!'}
 