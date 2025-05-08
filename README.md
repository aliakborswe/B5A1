# 1. What is type inference in TypeScript? Why is it helpful?
TypeScript-এ **টাইপ ইনফারেন্স (Type Inference)** হলো একটি ফিচার যেখানে **কম্পাইলার স্বয়ংক্রিয়ভাবে ভ্যারিয়েবল, ফাংশন বা এক্সপ্রেশনের টাইপ অনুমান করে** যখন স্পষ্টভাবে টাইপ ডিক্লেয়ার করা থাকে না। এটি ডেভেলপারদের **কোড কম লিখতে সাহায্য করে** কিন্তু টাইপ সেফটি বজায় রাখে।

## **টাইপ ইনফারেন্স কিভাবে কাজ করে?**

TypeScript কোড অ্যানালাইজ করে **ভ্যালুর উপর ভিত্তি করে টাইপ বুঝে নেয়**।

### **উদাহরণ ১: ভ্যারিয়েবল টাইপ ইনফারেন্স**

```tsx
let age = 25;// TypeScript automatically`age`-কে `number` টাইপ হিসেবে ইনফার করে
age = "30";// Error: Type 'string' is not assignable to type 'number'
```

এখানে **`age`**-এ **`25`** অ্যাসাইন করার পর TypeScript বুঝে নিয়েছে এটি একটি **number** টাইপ। তাই পরে স্ট্রিং অ্যাসাইন করলে এরর দেয়।

### **উদাহরণ ২: ফাংশন রিটার্ন টাইপ ইনফারেন্স**

```tsx
function add(a: number, b: number) {
    return a + b;// TypeScript রিটার্ন টাইপ `number` ইনফার করে
    }
const result = add(5, 10);// result-এর টাইপ `number`
```

ফাংশনের প্যারামিটারে টাইপ দেওয়া থাকলেও **রিটার্ন টাইপ** TypeScript নিজেই বুঝে নিয়েছে।

### **উদাহরণ ৩: অবজেক্ট টাইপ ইনফারেন্স**

```tsx
const user = {
    name: "John",
    age: 30,
}; // TypeScript ইনফার করে: { name: string; age: number; }
user.age = "35";//  Error: Type 'string' is not assignable to type 'number'
```

এখানে **`user`** অবজেক্টের প্রপার্টিগুলোর টাইপ TypeScript স্বয়ংক্রিয়ভাবে ডিটেক্ট করেছে।

## **টাইপ ইনফারেন্স কেন উপকারী?**

### **১. কম কোড লিখতে হয়**

স্পষ্টভাবে টাইপ ডিক্লেয়ার না করলেও TypeScript **অটোমেটিকালি টাইপ চেক করে**, ফলে কোড ক্লিন ও শর্ট থাকে।

### **২. টাইপ সেফটি বজায় রাখে**

যদিও টাইপ লেখা হয়নি, TypeScript **ভ্যালু দেখে টাইপ গেস করে** এবং ভুল টাইপ অ্যাসাইন করলে এরর দেয়।

### **৩. রিফ্যাক্টরিং সহজ হয়**

টাইপ ইনফারেন্সের কারণে **কোড পরিবর্তন করলে TypeScript সব জায়গায় টাইপ আপডেট করে দেয়**, ফলে ম্যানুয়ালি টাইপ ঠিক করতে হয় না।

### **৪. ডাইনামিক টাইপিংয়ের সুবিধা (JavaScript-এর মতো) + স্ট্যাটিক টাইপিং**

আপনি চাইলে কিছু জায়গায় টাইপ উল্লেখ না করলেও TypeScript **টাইপ চেকিং করে**, ফলে JavaScript-এর ফ্লেক্সিবিলিটি ও TypeScript-এর স্ট্যাটিক টাইপিং—দুটোর সুবিধাই পাওয়া যায়।




# 2. How does TypeScript help in improving code quality and project maintainability?

TypeScript, JavaScript-এর একটি **স্ট্রংলি টাইপড** এক্সটেনশন, যা বড় প্রজেক্টে কোডের **রিলায়েবিলিটি, মেইনটেইনেবিলিটি এবং স্কেলেবিলিটি** বাড়াতে সাহায্য করে। নিচে TypeScript-এর সুবিধাগুলো ব্যাখ্যা করা হলো:

### **১. কম্পাইল-টাইম এরর ডিটেকশন**

JavaScript-এ রানটাইমে গিয়ে বাগ ধরা পড়ে, কিন্তু TypeScript **কোড লেখার সময়ই** টাইপ সম্পর্কিত ভুলগুলো ধরিয়ে দেয়। ফলে রানটাইমে অপ্রত্যাশিত ভুল এড়ানো যায়।

```tsx
function add(a: number, b: number): number {
    return a + b;
}
add("5", 10);// Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

### **২. বেটার কোড অর্গানাইজেশন**

TypeScript **ইন্টারফেস, ক্লাস, জেনেরিক্স এবং মডিউল** সাপোর্ট করে, যা কোডকে **মডুলার** এবং **পুনর্ব্যবহারযোগ্য** করে তোলে। ডাটা স্ট্রাকচার স্পষ্ট থাকে, নতুন ডেভেলপারদের বুঝতে সুবিধা হয়।

```tsx
interface User {
    id: number;
    name: string;
    email: string;
}

function getUser(user: User): void {
    console.log(user.name);
}
```

### **৩. অটো-কম্প্লিশন ও ইম্প্রুভড ডেভেলপার এক্সপেরিয়েন্স**

TypeScript **IDE-তে ইন্টেলিসেন্স** (Auto-completion) দেয়, ফলে:

- প্রোপার্টি নাম ভুলে যাওয়ার ভয় নেই।
- ফাংশন প্যারামিটার ও রিটার্ন টাইপ আগে থেকে জানা যায়।
- কোড লেখার গতি বাড়ে এবং ভুল কম হয়।

```tsx
const user = { name: "John", age: 30 };
console.log(user.);// IDE suggests 'name' and 'age' automatically
```

### **৪. রিফ্যাক্টরিং সহজ করা 🔧**

বড় প্রজেক্টে কোড পরিবর্তন করলে TypeScript **সমস্ত রেফারেন্স চেক করে** ভুল কমায়।

```tsx
// Old function
function calculatePrice(price: number, discount: number) { ... }

// Renaming 'discount' to 'discountPercentage'
function calculatePrice(price: number, discountPercentage: number) { ... }
```

### **৫. টাইপ সেফটি ও রানটাইম এরর কমানো**

JavaScript-এ ডাইনামিক টাইপিংয়ের কারণে অনাকাঙ্ক্ষিত টাইপ কনভার্সন হতে পারে, কিন্তু TypeScript **কম্পাইল টাইমে টাইপ চেক** করে। ফলে রানটাইমে অপ্রত্যাশিত আচরণ এড়ানো যায়।

```tsx
// JavaScript (Problem)const num = "5";
const result = num + 10;// "510" (Unexpected string concatenation)
```

```tsx
// TypeScript (Solution)const num: number = 5;
const result = num + 10;// 15 (Correct)
```

### **৬. বড় টিমে কাজ করা সহজ হয়**

- **কোড স্ট্যান্ডার্ডাইজেশন:** টাইপ ডেফিনিশন সবাইকে একই রুলস মেনে চলতে বাধ্য করে।
- **ডকুমেন্টেশন হিসেবে কাজ করে:** টাইপ দেখেই বোঝা যায় ফাংশন কী করে।

```tsx
// Without TypeScript (Confusion)
function processData(data) { ... }// What is 'data'? Object? Array?

// With TypeScript (Clear)
function processData(data: { id: number; value: string }[]): void { ... }
```

### **৭. মডার্ন JavaScript ফিচার সাপোর্ট (ES6+)**

TypeScript **ক্লাস, অ্যারে মেথড (map, reduce), Async/Await, ডেস্ট্রাকচারিং** ইত্যাদি সাপোর্ট করে। এবংএক্সট্রা টাইপ সেফটি দেয়।

```tsx
// Async/Await with Type Safety
async function fetchData(url: string): Promise<Data> {
    const response = await fetch(url);
    return response.json();
}
```