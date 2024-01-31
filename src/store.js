import create from "zustand";

const basicUrl = "https://demo-java-web-backend.onrender.com";

const useStore = create((set, get) => ({
  //AUTH
  authenticatedUser: null,
  setAuthenticatedUser: (user) => set({ authenticatedUser: user }),

  signupUrl: `${basicUrl}/signup`,
  loginUrl: `${basicUrl}/login`,
  getUsersUrl: `${basicUrl}/users`,

  coffees: [],
  fetchCoffees: () => {
    fetch(`${basicUrl}/products/coffee`)
      .then((resp) => resp.json())
      .then((fetchedCoffees) => {
        console.log("fetchedCoffees in store: ", fetchedCoffees);
        set({ coffees: fetchedCoffees });
      });
  },

  drink: [],
  fetchDrinks: () => {
    fetch(`${basicUrl}/products/drink`)
      .then((resp) => resp.json())
      .then((fetchedDrinks) => {
        console.log("fetchedDrinks in store: ", fetchedDrinks);
        set({ drink: fetchedDrinks });
      });
  },

  frostino: [],
  fetchFrostino: () => {
    fetch(`${basicUrl}/products/frostino`)
      .then((resp) => resp.json())
      .then((fetchedFrostinos) => {
        console.log("fetchedSnack in store: ", fetchedFrostinos);
        set({ frostino: fetchedFrostinos });
      });
  },

  food: [],
  fetchFood: () => {
    fetch(`${basicUrl}/products/food`)
      .then((resp) => resp.json())
      .then((fetchedFood) => {
        console.log("fetchedFood in store: ", fetchedFood);
        set({ food: fetchedFood });
      });
  },

  snacks: [],
  fetchSnacks: () => {
    fetch(`${basicUrl}/products/snack`)
      .then((resp) => resp.json())
      .then((fetchedSnacks) => {
        console.log("fetchedSnack in store: ", fetchedSnacks);
        set({ snacks: fetchedSnacks });
      });
  },

  pastries: [],
  fetchPastries: () => {
    fetch(`${basicUrl}/products/pastries`)
      .then((resp) => resp.json())
      .then((fetchedPastries) => {
        console.log("fetchedPastries in store: ", fetchedPastries);
        set({ pastries: fetchedPastries });
      });
  },

  courses: [],
  fetchCourses: () => {
    fetch(`${basicUrl}/coruse/`)
      .then((resp) => resp.json())
      .then((fetchedCourses) => {
        console.log("fetchedPastries in store: ", fetchedCourses);
        set({ courses: fetchedCourses });
      });
  },

  user: { email: "", password: "" },
  setUser: (user) => {
    set({ user });
  },

  basketItems: [],
  addItemBasket: (newItem) => {
    const exist = get().basketItems.find((item) => item._id === newItem._id);
    if (exist) {
      set({
        basketItems: get().basketItems.map((item) =>
          item._id === newItem._id ? { ...exist, qnt: exist.qnt + 1 } : item
        ),
      });
    } else {
      set({ basketItems: [...get().basketItems, { ...newItem, qnt: 1 }] });
    }
  },

  removeItemBasket: (targetItem) => {
    const exist = get().basketItems.find((item) => item._id === targetItem._id);
    if (exist.qnt === 1) {
      set({
        basketItems: get().basketItems.filter(
          (item) => item._id !== targetItem._id
        ),
      });
    } else {
      set({
        basketItems: get().basketItems.map((item) =>
          item._id === targetItem._id ? { ...exist, qnt: exist.qnt - 1 } : item
        ),
      });
    }
  },

  removeAllBasketItems: () => set({ basketItems: [] }),

  totalToPay: 0,
}));

export default useStore;
