import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Login = () => {
  const [userid, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleUserIDChange = (e) => {
    setUserID(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid, password }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('로그인 성공!')
        navigate('/') // '/main' 페이지로 이동
      } else {
        console.log('로그인 실패:', data.error) // 실패 시 오류 메시지 출력
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error)
    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="userid" className="form-label">
                  유저 아이디:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userid"
                  value={userid}
                  onChange={handleUserIDChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  패스워드:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                로그인
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login
