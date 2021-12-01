import React from 'react'

function Search(props) {
    return (
        <div class="field has-addons">
  <div class="control"/>
    <input class="input" onChange={props.btnSearch} type="text" placeholder="Find a repository"/>
  
  <div class="control">
    <a class="button is-info">
      Search
    </a>
  </div>
</div>
    )
}
export default Search



