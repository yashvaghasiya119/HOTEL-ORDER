import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDatas } from "./reduxstore/dataslice";

export function Addsection() {
  const [input, setinput] = useState("");
  const [data, setdata] = useState([]);
  const [counts, setCounts] = useState({}); // Track counts for each item dynamically
  const [showConfirm, setShowConfirm] = useState(false); // State to show/hide confirmation popup
  const dispatch = useDispatch();

  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setdata(storedData);
  }, []);

  function formsubmit(e) {
    e.preventDefault();
    // Add the new item to the data array if it's not already added
    if (!data.includes(input)) {
      setdata((prev) => [...prev, input]);
    }
    setinput("");
  }

  function deleteitem(item) {
    const filter = data.filter((c) => c !== item);
    setdata(filter);
    const newCounts = { ...counts };
    delete newCounts[item]; // Remove the count for the deleted item
    setCounts(newCounts);
  }

  function updateCount(item, delta) {
    setCounts((prevCounts) => {
      const newCount = (prevCounts[item] || 0) + delta;
      return { ...prevCounts, [item]: Math.max(newCount, 0) }; // Prevent negative count
    });
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={formsubmit} className="form">
          <input
            type="text"
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="input-field"
            placeholder="Enter item"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="top-bar">
        <button className="clear-btn" onClick={() => setShowConfirm(true)}>
          Clear All Data
        </button>
      </div>
      <div className="container">
        {data &&
          data.map((item, i) => {
            const count = counts[item] || 0; // Get the count for the item, default to 0
            return (
              <div key={i} className="item">
                <h2 className="item-title">{item}</h2>
                <div className="counter">
                  <button
                    className="button increment"
                    onClick={() => updateCount(item, 1)}
                  >
                    +
                  </button>
                  <h2 className="count">{count}</h2>
                  <button
                    className="button decrement"
                    onClick={() => updateCount(item, -1)}
                    disabled={count < 1}
                  >
                    -
                  </button>
                  <button
                    className="button decrement"
                    onClick={() => deleteitem(item)}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      {showConfirm && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Are you sure you want to delete all data?</p>
            <button
              className="popup-btn yes"
              onClick={() => {
                clearData();
                setShowConfirm(false);
              }}
            >
              Yes
            </button>
            <button
              className="popup-btn no"
              onClick={() => setShowConfirm(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </>
  );
}
