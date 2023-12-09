import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:8000/auth/cookies', {
          method: 'GET',
          credentials: 'same-origin',
        })

        if (response.ok) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      } catch (error) {
        console.error('로그인 상태 확인 중 오류 발생:', error)
        setIsLoggedIn(false)
      }
    }

    checkLoginStatus()
  }, [])

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        setIsLoggedIn(false)
        console.log('')
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생:', error)
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8000/tour/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword }),
      })

      const data = await response.json()
      console.log(data)

      // 검색 결과를 SearchPage로 전달하며 이동
      navigate('/search', { state: { results: data } })
    } catch (error) {
      console.error('검색 중 오류 발생:', error)
    }
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <span>Travel</span>
        </Link>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색..."
          />
          <button type="submit">검색</button>
        </form>

        <div
          className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/tour-package" className="nav__link">
                Tour Package
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav__item">
                <button onClick={handleLogout} className="nav__link">
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav__item">
                <Link to="/login" className="nav__link">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
