function generatePlans() {
  const bedroom = document.getElementById("bedroom").value;
  const kitchen = document.getElementById("kitchen").value;
  const washroom = document.getElementById("washroom").value;
  const storage = document.getElementById("storage").value;
  const hall = document.getElementById("hall").value;

  const plansDiv = document.getElementById("plans");
  plansDiv.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const plan = document.createElement("div");
    plan.className = "plan-card";

    plan.innerHTML = `
      <h3>Plan Option ${i}</h3>
      <p>Bedrooms: ${bedroom}</p>
      <p>Kitchens: ${kitchen}</p>
      <p>Washrooms: ${washroom}</p>
      <p>Storage Rooms: ${storage}</p>
      <p>Hall: ${hall}</p>
      <p><strong>Layout Type:</strong> ${
        i === 1 ? "Compact Design" :
        i === 2 ? "Balanced Design" :
        "Luxury Spacious Design"
      }</p>
    `;

    plansDiv.appendChild(plan);
  }
}