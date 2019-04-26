import React from 'react'

class CatList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { catPics } = this.props
    const renderCatPics = () => {
      return catPics.map((pic, i) => <img src={pic.url} key={i}/>)
    }
    return(
      <div>
        {renderCatPics()}
      </div>
    )
  }
}

CatList.defaultProps = {catPics: []}
export default CatList
