import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const SearchPage = () => {
  const searchResults = useLocation()
  console.log(searchResults.state)
  return (
    <>
      <Header />
      <div>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {searchResults.state.results.response.body.items.item.map(
                (item) => (
                  <div className="col" key={item.contentid}>
                    <div className="card shadow-sm">
                      <img
                        src={item.firstimage || 'http://placehold.it/300x200'}
                        alt={item.title}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          <h3>{item.title}</h3>
                          <p>{item.addr1}</p>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SearchPage
