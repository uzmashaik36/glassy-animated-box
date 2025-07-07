   function combine() {
      const str = document.getElementById("stringInput").value;
      const num = document.getElementById("numberInput").value;

      if (!str || !num) {
        document.getElementById("result").innerText = "⚠️ Fill both fields!";
        return;
      }

      const result = str + num;
      document.getElementById("result").innerText = "✅ Result: " + result;
    }