export const userDetails = {
  username: "Steve123",
  fullname: "Steve Smith",
  sector: "Science",
  desc:
    "I am a scientist, and I am looking for sciency-type grants because I like science",
  usertype: 1, //1 means grant applicant, 2 means grant writer
  image:
    "https://image.shutterstock.com/image-photo/young-scientist-looking-through-microscope-600w-524351890.jpg",
  role: "writer",
};

export const grants = [
  {
    id: 1,
    title: "UTC Program Tier 1 Competition 2020",
    number: "UTCTIER1COMP2020",
    agency: "DOT-RITA",
    status: "posted",
    postedDate: "03/30/2020",
    closedDate: "05/29/2020",
    image:
      "https://image.shutterstock.com/image-photo/cropped-image-male-female-hands-600w-1510838900.jpg",
    detailMain: "Some main detail for Grant #1",
    detailContent: [
      "Some details for 1",
      "Some details for 2",
      "Some Detail for 3",
      "Some detail for 4",
    ],
    sector: "science",
    roles: "",
  },
  {
    id: 2,
    title: "NIST Manufacturing USA National Emergency Assistance Program",
    number: "2020-NIST-MFGUSA-NEAP-01",
    agency: "DOD-NIST",
    status: "posted",
    postedDate: "03/30/2020",
    closedDate: "04/14/2020",
    image:
      "https://images.freeimages.com/images/large-previews/b0b/american-flag-1547938.jpg",
    detailMain: "Some main detail for Grant #2",
    detailContent: [
      "Some details for 1",
      "Some details for 2",
      "Some Detail for 3",
      "Some detail for 4",
    ],
    sector: "bio-med",
  },
];
