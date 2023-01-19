{
  /* <div>
<h3>temperture converter</h3>
<form id="temprature" onsubmit="calculatetemp(); return false">
<label for="temp">eneter the input</label>
<input type="number" name="temp" id="temp">
<select name="temp_diff" id="temp_diff">
    <option value="fer">ferhenite</option>
    
    <option value="cel">celcius</option>
</select>
<br>
<input type="submit" name="temp">
</br>
<span id="container"></span>
</form>
</div> */
}
const calculatetemp = () => {
  const temp = document.getElementById("temp").value;
  const tempindex = document.getElementById("temp_diff").selectedIndex;
  // const valuetemp= tempindex.options[ tempindex.selectedIndex].value;
  // console.log(tempindex);
  let result;
  const celtofeh = (cel) => {
    let ans = Math.round((cel * 9) / 5) + 32;
    return ans;
  };
  const fehtocel = (cel) => {
    let ans = (Math.round(cel - 32) * 5) / 9;
    return ans;
  };

  if (tempindex == 0) {
    result = fehtocel(temp);
    document.getElementById("container").innerHTML = `${result} celcius`;
  } else {
    {
      result = celtofeh(temp);
      document.getElementById("container").innerHTML = `${result} fehrenhite`;
    }
  }
};
