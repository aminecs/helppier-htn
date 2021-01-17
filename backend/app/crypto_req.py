## Perform all crypto transactons here
import os
import requests

# Tranfer from sponsor to user
def payout(addr, amount):
    """Payout crypto to user"""
    # "{url}/transfer?to=<addr>"
    host = os.environ.get("CRYPTO_API", "http://localhost:3000")
    # ret = requests.get(f"{host}/transfer?to={addr}")
    print(f"Requesting: {host}/transfer")
    ret = requests.get(f"{host}/transfer", params= {
        "to": addr
    })
    print(ret.status_code)


def getBalance(addr):
    """Payout crypto to user"""

    host = os.environ.get("CRYPTO_API", "http://localhost:3000")
    print(f"Requesting: {host}/getBalance")
    ret = requests.get(f"{host}/getBalance", params= {
        "addr": addr
    })
    # print(ret.status_code)
    # print(ret.text)
    return ret.text