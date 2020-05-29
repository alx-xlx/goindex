document.write(`
<style>
*{box-sizing:border-box}
h1{border-bottom:1px solid silver;margin-bottom:10px;padding-bottom:10px;white-space:nowrap}
table{border-collapse:collapse;font-family:Consolas,monaco,monospace}
th{font-weight:700}
.file-name{text-align:left}
.file-type{text-align:center}
.file-size{padding-left:4em}
.file-date-created,
.file-date-modified{padding-left:2em}
.file-date-created,
.file-date-modified,
.file-size{text-align:end;white-space:nowrap}
.icon{padding-left:1.5em;text-decoration:none}
.icon:hover{text-decoration:underline}
.icon-file{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABHUlEQVR42o2RMW7DIBiF3498iHRJD5JKHurL+CRVBp+i2T16tTynF2gO0KSb5ZrBBl4HHDBuK/WXACH4eO9/CAAAbdvijzLGNE1TVZXfZuHg6XCAQESAZXbOKaXO57eiKG6ft9PrKQIkCQqFoIiQFBGlFIB5nvM8t9aOX2Nd18oDzjnPgCDpn/BH4zh2XZdlWVmWiUK4IgCBoFMUz9eP6zRN75cLgEQhcmTQIbl72O0f9865qLAAsURAAgKBJKEtgLXWvyjLuFsThCSstb8rBCaAQhDYWgIZ7myM+TUBjDHrHlZcbMYYk34cN0YSLcgS+wL0fe9TXDMbY33fR2AYBvyQ8L0Gk8MwREBrTfKe4TpTzwhArXWi8HI84h/1DfwI5mhxJamFAAAAAElFTkSuQmCC) left top no-repeat}
.icon-dir{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAABhWlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mFYu0OFhBxCFDdbIgKuIoVSyChdJWaNXB5NI/aNKQpLg4Cq4FB38Wqw4uzro6uAqC4A+Ik6OToouU+F1SaBHjHcc9vPe9L3ffAUKzylQzMAGommWkE3Exl18Ve18RoDmIMIISM/VkZjELz/F1Dx/f72I8y7vuzxFWCiYDfCLxHNMNi3iDeGbT0jnvE0dYWVKIz4nHDbog8SPXZZffOJccFnhmxMim54kjxGKpi+UuZmVDJZ4mjiqqRvlCzmWF8xZntVpn7XvyF4YK2kqG67RGkMASkkhBhIw6KqjCQox2jRQTaTqPe/iHHX+KXDK5KmDkWEANKiTHD/4Hv3trFqcm3aRQHOh5se2PUaB3F2g1bPv72LZbJ4D/GbjSOv5aE5j9JL3R0aJHQP82cHHd0eQ94HIHGHrSJUNyJD8toVgE3s/om/LAwC3Qt+b2rX2O0wcgS71avgEODoGxEmWve7w72N23f2va/fsBB0ByfJ0/evMAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBAQVNiXjFuYKAAAAq0lEQVQ4y+2VwQ3CMAxFn1E3cmYKM9UzxTN9DtCCKjWFtgcksGQ5B+vlJbISaxJnxoWTY5gWxayr2iR7G1jMpDZ2G81M70AN2ITNzeW6aT8ARAS11i4sIljb+NV+AKi1EhFdYG/DsTrlAf3oyGvmAJGQmcfHZml+GLi8qr/hzxnOQ/pBXRpakyhmGqvvt8x7zcw7cHrC3PdDMxN3hybNCWhvurua9DT82j/lBm8Ce28d5ByDAAAAAElFTkSuQmCC) left top no-repeat}
.icon-up{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAQAAADcrC56AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBAQUMiGB1Y0gAAAAAW9yTlQBz6J3mgAAAdpJREFUKM9lkr1PU3EUhp9zP1qgt6ShpJi2UosoQaksjJoYNV0YHDTxDzBxUGP8T4yLg4ODcXB0IjFuTVU0xq8oQgQ1QKVQ+iHYe3vvbe/PobbB+L7Tyfvk5M3JEf7qJkrX4vbYctgZlq9U8fG7idFDYuiGe9y9KAnSFFlii2Xq+AeQKCFpDMsMKbLMss93nlLgI80+olBKKengA3HipJhijnss9pE2SKCUj4cCwCRJHsTqIwOEVUtkkCh6f3E4mPVu90ZsRvVWtGlWOu3DDIqn+bIbfKivbGd7iKyHSkG2trNad8TSQ/JtoDJUKr/bOOKc6CGjzNRbrxv3nS+1Til2yN6yXS9XztnHiHa7jDDPOR6nPj/I+nObaWt6d7QakpinK0CAGPPcYJKX5s7YuHmyEmlHOmb3tIIOxLlCEZeApuwZLVNpir4H1FEF1yjgov63KEOlmpdWDPJMEeIfCRpaYLgJN/Mq/sjgIYo8w91QwyRwVGtERbc7n3LliQXrucEz9tG4QIRfeEOStP331bVxL7e2Xkzunane8Q0cFtHQOcWCrFoy3bTeFjYTndP21eYEPyliAA4v0DnPE5YsMv5dexKfGm/4wWVuIf13SbMhvzPkOUuD6wfK/wHBCcZftDFjfgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0wNFQyMDo1MDozMyswMDowMB6bUgYAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMDRUMjA6NTA6MzMrMDA6MDBvxuq6AAAAAElFTkSuQmCC) left top no-repeat}
.icon-text{background:url(data:image/gif;base64,R0lGODlhEAAQAKL/AP///zk5OWtra4yMjMDAwM7Ozufn5wAAACH5BAEAAAQALAAAAAAQABAAAANFSLrcvuMVQGsxsc1KJ9ZcVxREpkxBmgJqwHhGbFCK8LJtZdgLLMcU3gnXWgkJvt/siCoab0oZgEksTm8hzrEk6Hq9rkUCADs=) left top no-repeat}
.icon-audio{background:url(data:image/gif;base64,R0lGODlhEAAQAKL/ADk5OWtra4yMjMDAwM7OzgAAAAAAAAAAACH5BAEAAAMALAAAAAAQABAAAAM8OLpM/C8AAZcTIIOqsM6cFoxglUlfKKLqNBAlBBKCpw6j/dQZEeAxRQ7kCfqAG9oIUtwoCI6H8seRRqsJADs=) left top no-repeat}
.icon-7z{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAQAAAAngNWGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAHdElNRQfkBQgTHRi+Nb3IAAAB7klEQVQoz2WTv2sUQRiGn292dvf29ryQYLBSLJSQImAtWtjEwmtSGfAPEKOgiMWlsNAgiBEbqxDTiSBYqEgKwYC1jQqCWph4RNREg97lvMt6M5/FXi4/fKYbnoGP950P6COiUA5uSwPdOtIK7iR7ImIGAbAgZARn/Xl5Ie/IUYp62l3MomQya/ykwjOAhKQsr2QhLdNjxJjHKN7cjUqWkDEsgBbo09fN+ik+IIR8ooa2AfETzhSqncZ8Lm4yjwIQ4UAAMO5ca6M46TYMbN5tETLu5RtN6jTwOtE+2cYO0OoJMRVA6HCP6EbnvoqoHHW3/LA+tWsIiQMU2jzqPcpWzAoAdbmKgDVX/N5WQklGzDViLKCoGqlFc9rMwCgCWD8Num4u6aJPuakDdKRfU5DVv895vzW3yafXM0EafJcsqiaj9kmeuRpltxgzJF/9BX9Ex+P97ni3ne1eV0Rmtd+PSbMwlx0jb0h2ppbn2Ahq7jIlsyyt8G34EkCM+O2mDa7rPok6U/wyM7jWCVQ/mxmMLNkvit/ZRDooH5ndVQ8WiyEY5oepgj3AKk7ywA/iupIQYFkmA0QAbI0Y2vyWQ2l5qc5/2MMUZQ0shKzXzUOd+vOg93E3USm6CotmQQBSQuKymZb69lXoLoSaN3YUhvgHlFC/SvbklcMAAABBdEVYdGNvbW1lbnQAQ1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODUKC8DAuwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wOFQxOToyOToyNCswMDowMEmMLvwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDhUMTk6Mjk6MjQrMDA6MDA40ZZAAAAAAElFTkSuQmCC) left top no-repeat}
.icon-zip{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAQAAAA3m5V5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfkBQkDNzfeFYisAAABSElEQVQoz3WSPUtDQRBFz8wmmkcMIQkYFFvtBe0t7GysbQIWFmIR7FJZaCM2CrEQRcFC8A+kEvMDREGxUhCxsAuiedGY97EWxpD3MGebZedyLzszOFV9x6XZd1zaUhkWRflFtBFucYXhD0uGXYpStscKhAA0mCZKhmssDVmCBAVAoc8FMBiRAMjbPVnwka4ogsNEUw+oUaNlF+GtGzfTL0rjACaJss2pAJCIO7XIkOHTAy7I2u5rzOk/dFBBkN4tHjfOMilCcx948qXFcIpAb+OiFJPkmbdnJG3HzvJBJ1yNxz1RMkfyrPt8Y2lTYd1qxMnBR3JeWc79G5SQIdboSEKjWR5+iRFzgiKAMIrqRsTJJTnmr9isd8gdDi08NqkH0d9ZxGWHAoYX6nS45BFy0S0w0Vn3SCjhHGkMwmvwMKCzvc1sUx3U/R8lgmk3/bDp/AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wOVQwMzo1NTo1NSswMDowMN8Bz50AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDlUMDM6NTU6NTUrMDA6MDCuXHchAAAAAElFTkSuQmCC) left top no-repeat}
.icon-mid{background:url(data:image/gif;base64,R0lGODlhFAAWAMIAAP////8zM8z//8zMzJmZmWYAADMzMwAAACH+TlRoaXMgYXJ0IGlzIGluIHRoZSBwdWJsaWMgZG9tYWluLiBLZXZpbiBIdWdoZXMsIGtldmluaEBlaXQuY29tLCBTZXB0ZW1iZXIgMTk5NQAh+QQBAAACACwAAAAAFAAWAAADayi63P4wNsNCkOocYVWPB7FxFwmFwGh+DZpynndpNAHcW9cVQUj8tttrd+G5hMINT7A0BpE4ZnF6hCqn0iryKs0SDN9v0tSc0Q4DQ1SHFRjeBrQ6FzNN5Co2JD4YfUp7GnYsexQLhBiJigsJADs=) left top no-repeat}
.icon-xml{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAMAAABBexbDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACJVBMVEVJSUkzMzMAAAAxMTEtLS0kJCRMTEw3Nzd5eXknJyd3eHchISF+fX4oKCgbGxsAAAAAAAAAAAA7Ozt7enoyMjIaGho6OjpWVlZXV1c/Pz9ZWVn39/f6+vr5+fn4+Pj39vb19fX09PV3d3e8vLz9/fz8/Pv6+vv5+fp4eHjGxsbn5+f5+Pn7+/v49/j29fbHyMf7+/rh4eH6+fr4+fn39/j29vb09PRgYGBTU1NnZ2dGRkZZWFj29fX4+Pn09PPy8vJcXFsKCgoFBgYJCQkICAhYWFj19PXz8/Pg4N/R0dGZmZmIiIiNjY09PT319PTi4uLOzs7d3d7Ozs/r6+vu7u7g4OGvr6+pqalDQ0Px8fHf396AgIB9fX24uLhhYWG1tbXp6urq6erq6+vNzc1CQkLw8PDf39+BgIBubm7Pz8/k5OSXl5dhYWK0tLXo5+fp6enMzMzv8O+BgYFvb2/t7e3t7eyUlJReXl7m5ubLy8vg4OCHh4dpaWnHyMjq6ene3d6MjI1bW1u9vb3Kysrq6urGxcVoaGiLi4vp6ei0tLRcXFyVlJTb2tvJycnExMRiYmKJiYnc29vl5eWzs7OTkpLb29vk4+PJyMjo6enAwMBgYGGPjo+/v7+Pj4/a2tnHx8fo6Oi+v7+amprY2Njf4N/Gx8bo5+jn5ufn6Oji4eHe3t6srKyrq6uqqqqoqKirq6qGhoYgICAZGRkaGhoSEhICAgIzM5lvrjGXAAAAFnRSTlMAAAAAAAD0POM43jraONkyT035+yhsUHJeMwAAAAFiS0dEtqoHC/EAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfkBQkKDTPzAKlDAAABOElEQVQY02MQE5eQEAcBSTZ2BkYmJiYGKWkZWTl5BUVpJWUOTmZGkIiMiqqaupy0jIamFhc3CyNQRFtHRlZXWk9bQ9/AkIeXFaTLyNjEVMFMztxCwtKKj5+JwdrGVtpUwc7e1MHRydHZRYCJwdVMWs/Nzc3e3cPTy9vHVxAo4q7gZ+YfEBgUHBIaFh4BEok0M4uKjomNi09ITEpOAYpIpJqlpWdkZmXn5OblF4BFCtOKipNLSv3LyuMrKkEirlXVNbUlwXWJ9Q2NTc1gNS2tbe2BLR0VnV3dPb0gEfGWkr7+CRMnTe6aMnXadLDIjOC6mbNmzymfO8/QcD5YRCt/gdbCRU2LFhtGLVkKFsnLX7Z8xYxJFSvTVkWB1QgJr16zZu3ateHh4evWb9gIFBER3QQHm7dsFWQCADqOYoQTrx32AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTA5VDEwOjEzOjUxKzAwOjAwtkxl8wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0wOVQxMDoxMzo1MSswMDowMMcR3U8AAAAASUVORK5CYII=) left top no-repeat}
.icon-md{background:url(data:image/gif;base64,R0lGODlhFAAWAMIAAP/////Mmcz//5lmMwAAAAAAAAAAAAAAACH+TlRoaXMgYXJ0IGlzIGluIHRoZSBwdWJsaWMgZG9tYWluLiBLZXZpbiBIdWdoZXMsIGtldmluaEBlaXQuY29tLCBTZXB0ZW1iZXIgMTk5NQAh+QQBAAACACwAAAAAFAAWAAADTCi63P4wykkdubiSwDuRVydi5CWEYjBsKbe2rDjMdMwRw1iaaZx7jcDm8nOpVsFjsSh0CFuq46fxko0eKOtsiu0UuRHfVlOqmM9oSgIAOw==) left top no-repeat}
.icon-pdf{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAATCAMAAABBexbDAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABaFBMVEX////8/Pvs7OTp6eDo59/6+vj8/Prs7OPp6uHf3tPm5dzm2dHdqaTn4NjZ18ro6OD9/f3p6+LjycPWf3zl1M3g39Ta2Mvb2c3t7Ob+/v7m18/XhoPn3NPo597m5t3m5tzq6uHn3dXWgoDkzsbjycLamJTdqKPo5t3erajhu7XalZHZkY7cpKDl1s7l0svWgX/al5PesKrbmpbWgn/kzcXjyMHVfHro49vp597n3tbp6N/p59/ampbYjInl0cr8+/rr6OHo5d346+rYhYPUdXPTdHLTdHP35OTQXV3LRkfRXV7dhYXTY2TZd3jbgIHQWVrWbG3cg4TSYGHRX1/LR0jZeHjjnJ3il5jkn6Dbfn/gk5TeiInQWlvLSUrZeXnnq6vae3zhlpbim5vjnJzfj5DLSEnXcnLMTE3imZrhlZbdhobSYWLMSkv46OfSY2TMSUrNUFHOUVLMS0zSX2DNTk/OU1TMSUv46OgY/Hh1AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+QFCQkNBqf10zkAAADnSURBVBjTY2BgZGKGAhZWBjBgYwdzOZiZObkYISIgNRzcPLzMnHz8AnARQSFhEQ5RMXEJSbgaKWkZDlk5eQVGuIiikrIgkGZig+tSUVVTF+RAFtHQ1NLW0eWAi3Do6RsYGhmbwEU4TM3UzAUtLK3guqxtbC05wI6E67IT4YB4BCxi7+CobmGhDgaODvZAESdnFxdXN1dXFzdXFxdnJ6CIu4enl7ePr59/QGCQp4c7SCQ4JDQsPCIyKjw6JjYYKhIXn5AYlJScAhdJTUtIz8j0y8rOyQGL5OblFxQWxRSXlJYUleWVMwAAk4Er1nVAafYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMDlUMDk6MTM6MDYrMDA6MDAhkb6HAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTA5VDA5OjEzOjA2KzAwOjAwUMwGOwAAAABJRU5ErkJggg==) left top no-repeat}
.icon-bat{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAMAAADjcdz2AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABy1BMVEUBAAAIBwYPDw4AAAAHBwcREA4UEg8REA8NDQ0ODg4AAwUZFRFKQjYHCAkAAgcxGg+fj3cSEA4BBgkwGhColHYVFBIOCwhMKRink3WqlXcWFBJ+b1kTExIXGBkSExMNDAwvOkEwO0IqNjwUGBt7bFYyLSVlWUdsX0tlWUYwNDMZHyMAAAAAAAAAAAAQFBYnMjclLzQSFhhvYk6BcVqAcFl/cVx/cl+AcV19cFxQNCPfxJz/4rT/4LL95cH66tL95sX+6MmCQiRqQSrexJz/4rP/4LP/4bT/4rVsOSBvVT/x1Kn/4bNhVUS4oYC5ooHjyJ+LemH/5Lb/47X/47T/5baIeF/z1qrIsIzAqYfCq4j73K+FeWQ2QUU1QEU1P0QyPULw06daWE8hPEEITEcKWFIKWFMJU00SLi4ZHyPw0qdbWFAaREYAYlgAZFoAl4kAmIoAjoAJOjYYHSAbREYAQjwAbmQAin0AlogAjX8YHSEbQ0UAdWoAh3oAhnrz1alcWVAAjH+JeGDny6Lny6HBqYZNTEYcQ0YAi37HrovJsY2QfmRAQDwcQ0UAiHsAk4UAinwIODQpQEYTR0UUS0kUSEYaMDIqNDoqMzr///9hvpbWAAAAMnRSTlMAAAAAAAAAAAAAI8zRIRiy+0wXqftQsf77+038f0JBG/r498b9i8nLy+39AxASdvn+u16Vj4MAAAABYktHRJh20QY+AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5AUJCgI2BPJBAwAAAOlJREFUGNNjYGDk4jYyNjE1M7fg4WViZmZg4eO3tLK2sbWzdxAQZAUKCAk7Ojm72Li6ubqLiLIBBcTEPTy9vG2AwFoCLODj6+cP5sMEAgKDvL2Dg4AgRFKKnYOTIdTbxjssPAIIIqVlZOXkQQJR0TGxcUAQr6CopAwU8E5ITEpOAYHUtPQMkEBmVnZObl5+Xl5+QWERRKA4t6S0LK88r6KwEiJQVV1TWgsTsLauq69qAOoohwg0NjW3tLa1A7lQAZWOzq7unt4+MOifUMSgqqauoTlx0mQwmDJVi0FbR1dHT3/adDCYZmAIAH4CVo8G3xMtAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA1LTA5VDEwOjAyOjU0KzAwOjAwyjj+qgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wNS0wOVQxMDowMjo1NCswMDowMLtlRhYAAAAASUVORK5CYII=) left top no-repeat}
.icon-html{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAQAAAA3m5V5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfkBQkKBRXp1Ka2AAABeElEQVQoz3WSzStEYRTGf+97L3MNY2SBGfKdYqesbCRr2VrJavwDylZJskGhSBnZWxobOxuJjXxFUYo0NaUZbsZ177G4F3fEczan0+k5zznnoWJV53mhEIoXVYxOp3Qr7fhQRk7POYcYfEGIsaiT0cnCWicG1wDk6KUUMY4R/Vw1Dt10ARpCLICFpZSAF7cXqkYuUUFTCRL0F8o31B4ZL/86DHfBuL5wUzMJwCpDM8+2z2H+ZrqnmTYeHGCfuBdUfzH9BQ1IaUkBMQQryP1xBqNcE6OOOC0ojiqtyKm6qhnUEbueE85MBIMxdmiimxtS5CRrjzt27WZ+xj0gicOZL9+ljUZspjlgi7R8eB35RSkTDxf52W4Ckx08BEH40LORR3uABkpOsEw9FYFOUO93zq70kgBMlA52fCCLBnTwBy2gQSmmyJgoXNa55YJqhDRPFFniHMio6nKj2PO3C0IX839vGughpxIDxWNgnpC1XD/5duYbK/8xfgIXV3unfHDg0QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNS0wOVQxMDowNToyMSswMDowMHAZw20AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDUtMDlUMTA6MDU6MjErMDA6MDABRHvRAAAAAElFTkSuQmCC) left top no-repeat}
.icon-rar{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAQAAAAul0yEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfkBQkKBzZ5hbVGAAABZ0lEQVQoz12SPSjEcRjHP7+Xu59z56XzEhIuk8F2isFmMxhMUnal1NmUiUzYThl0ZVBmVjNZxEAhfyVFuPP2P/R/+RmOc3ye8dvz7en7fTBbosDj74iPqmxfpJ1uAIS6EDP+NZISITNiNDZdXOuhikPgiGYqWcbK+5phWAXgmNYfpQtQC1isOkmk4oCuXHSIEt14L4axYMTtxPkn5/AQZ+EiipS1/DcvI+mhnh9zDfhEaMTlFUlt+HIaIEigAZtSTisa39y61SSx+t6YYh2IFw2EV71BDunL26zfb9OBeNoOkwxar/igAevVU2DOjnwO2QYytHljWLJc+tnS5QEpZmmTB0GSODEsigkKUpbCFCKvOyKfZoMm5slg8LSr0rGVkqysk5iUHh3cMU4GD8SS2QzTGhDcsKv3ElNvHzTj8MoOeOct+8/d5UokccyfbJIYtIqLAf8aGebdy7/R5QG+3+GZ9XLnFXwBD+yC4BnhT5YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDUtMDlUMTA6MDc6NTQrMDA6MDAsETXuAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA1LTA5VDEwOjA3OjU0KzAwOjAwXUyNUgAAAABJRU5ErkJggg==) left top no-repeat}
</style>`);


// .icon-image{background:url() left top no-repeat}
// .icon-video{background:url() left top no-repeat}
// 
// 
// .icon-pdf{background:url() left top no-repeat}
// .icon-msword{background:url() left top no-repeat}

// .icon-XYZ{background:url() left top no-repeat}

// 初始化页面，并载入必要资源
function init(){
    document.siteName = $('title').html();
    $('body').addClass("mdui-theme-primary-blue-grey mdui-theme-accent-blue");
    var html = `
    <h1 id="heading">Index of <?php echo urldecode($path);?></h1>
    <table id="table">
    </table>
	`;
    $('body').html(html);
}

function render(path){
	if(path.indexOf("?") > 0){
		path = path.substr(0,path.indexOf("?"));
	}
    title(path);
    nav(path);
    if(path.substr(-1) == '/'){
    	list(path);
    }else{
	    file(path);
    }
}


// 渲染 title
function title(path){
    path = decodeURI(path);
    $('title').html(document.siteName+' - '+path);
}

// 渲染导航栏
function nav(path){
	path = decodeURI(path);
    $('#heading').html('Index of '+path);
}

// 渲染文件列表
function list(path){
	var content = `
<tr><th class="file-name">Name</th><th class="file-size">Size</th><th class="file-date-modified">Date Modified</th><th class="file-type">Type</th></tr>
	`;

	if(path != '/'){
		var up = path.split('/');
		up.pop();up.pop();
		up = up.join('/')+'/';
		content += `
<tr>
	<td class="file-name">
		<a class="icon icon-up folder" href="${up}">..</a>
	</td>
	<td class="file-size"></td>
	<td class="file-date-modified"></td>
</tr>
		`;	
	}
	$('#table').html(content);
	
    var password = localStorage.getItem('password'+path);
	
	// $('#list').html(`<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>`);
	// $('#list').html(html);
    $.post(path,'{"password":"'+password+'"}', function(data,status){
        var obj = jQuery.parseJSON(data);
        if(typeof obj != 'null' && obj.hasOwnProperty('error') && obj.error.code == '401'){
            var pass = prompt("password","");
            localStorage.setItem('password'+path, pass);
            if(pass != null && pass != ""){
                list(path);
            }else{
                history.go(-1);
            }
        }else if(typeof obj != 'null'){
            list_files(path,obj.files);
        }
    });
}

function list_files(path,files){
    html = "";
    for(i in files){
        var item = files[i];
        if(item['size']==undefined){
            item['size'] = "";
        }
        item['modifiedTime'] = utc2beijing(item['modifiedTime']);
        item['size'] = formatFileSize(item['size']);
        if(item['mimeType'] == 'application/vnd.google-apps.folder'){
        	var p = path+item.name+'/';
            html +=`
				<tr>
					<td class="file-name"><a class="icon icon-dir folder" href="${p}">${item.name}/</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'audio/mid'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-mid" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'audio/mpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-audio" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'image/jpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-image" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'video/mpeg'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-video" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-7z-compressed'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-7z" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-zip-compressed'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-zip" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'text/plain'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-text" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'text/xml'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-xml" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-rar'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-rar" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'text/html'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-html" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/pdf'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-pdf" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
                    <td class="file-date-modified">${item['iconLink']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'text/markdown'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-md" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-msdos-program'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-bat" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-msdownload'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-x-msdownload" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/x-bittorrent'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-application/x-bittorrent" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        } else if(item['mimeType'] == 'application/vnd.google-apps.spreadsheet'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-google.spreadsheet" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">application/google.spreadsheet</td>
                    <td class="file-date-modified">${item['iconLink']}</td>
                    
				</tr>
            `;
        } else if(item['mimeType'] == 'application/vnd.google-apps.presentation'){
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-google.presentation" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
					<td class="file-date-modified">${item['modifiedTime']}</td>
					<td class="file-date-modified">application/google.presentation</td>
				</tr>
            `;
        } else{
	        var p = path+item.name;
            html += `
				<tr>
					<td class="file-name"><a class="icon icon-file" href="${p}">${item.name}</a></td>
					<td class="file-size">${item['size']}</td>
                    <td class="file-date-modified">${item['modifiedTime']}</td>
                    <td class="file-date-modified">${item['mimeType']}</td>
				</tr>
            `;
        }
    }
    $('#table').append(html);
	// $('#list').html(html);
}


//时间转换
function utc2beijing(utc_datetime) {
    // 转为正常的时间格式 年-月-日 时:分:秒
    var T_pos = utc_datetime.indexOf('T');
    var Z_pos = utc_datetime.indexOf('Z');
    var year_month_day = utc_datetime.substr(0,T_pos);
    var hour_minute_second = utc_datetime.substr(T_pos+1,Z_pos-T_pos-1);
    var new_datetime = year_month_day+" "+hour_minute_second; // 2017-03-31 08:02:06

    // 处理成为时间戳
    timestamp = new Date(Date.parse(new_datetime));
    timestamp = timestamp.getTime();
    timestamp = timestamp/1000;

    // 增加8个小时，北京时间比utc时间多八个时区
    var unixtimestamp = timestamp+8*60*60;

    // 时间戳转为时间
    var unixtimestamp = new Date(unixtimestamp*1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length-2, month.length)  + "-" + date.substring(date.length-2, date.length)
        + " " + hour.substring(hour.length-2, hour.length) + ":"
        + minute.substring(minute.length-2, minute.length) + ":"
        + second.substring(second.length-2, second.length);
}

// bytes自适应转换到KB,MB,GB
function formatFileSize(bytes) {
    if (bytes>=1000000000) {bytes=(bytes/1000000000).toFixed(2)+' GB';}
    else if (bytes>=1000000)    {bytes=(bytes/1000000).toFixed(2)+' MB';}
    else if (bytes>=1000)       {bytes=(bytes/1000).toFixed(2)+' KB';}
    else if (bytes>1)           {bytes=bytes+' bytes';}
    else if (bytes==1)          {bytes=bytes+' byte';}
    else                        {bytes='';}
    return bytes;
}

// 监听回退事件
window.onpopstate = function(){
    var path = window.location.pathname;
    render(path);
}


$(function(){
    init();
    var path = window.location.pathname;
    $("body").on("click",'.folder',function(){
        var url = $(this).attr('href');
        history.pushState(null, null, url);
        render(url);
        return false;
    });

    render(path);
});
