      let outputScreen = document.getElementById("output-screen");

      const display = (num) => {
        outputScreen.value += num;
      };

      const calculate = () => {
        try {
          outputScreen.value = eval(outputScreen.value);
        } catch (err) {
          alert("Invalid");
          outputScreen.value = "";
        }
      };

      document
        .getElementsByClassName("optr")[0]
        .addEventListener("click", () => {
          outputScreen.value = "";
        });

      function del() {
        outputScreen.value = outputScreen.value.slice(0, -1);
      }
