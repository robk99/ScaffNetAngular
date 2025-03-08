# ScaffNet Angular

A modern, responsive Angular 18 application that provides a user-friendly interface for the [ScaffNet](https://www.nuget.org/packages/ScaffNet) code generation tool. This frontend connects to the [ScaffNetAPI](https://github.com/robk99/ScaffNetAPI) backend to generate project templates with ease.

## Features

- **Architecture Template Generation**:
<br>- Clean Architecture: Create new clean architecture project by specifying a project name and path
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing in any environment
- **Modern UI**: Built with Tailwind CSS for a sleek, modern interface

## Screenshots

### Dark Mode
![Screenshot 2025-03-08 231802](https://github.com/user-attachments/assets/67e5a771-62d4-48e9-b051-9a7b8f3decd1)

### Light Mode
![Screenshot 2025-03-08 231822](https://github.com/user-attachments/assets/46e4d818-3734-453d-8f36-7ddaddaedb1f)

## Backend Integration

This Angular application connects to the [ScaffNetAPI](https://github.com/robk99/ScaffNetAPI) backend, which implements the ScaffNet NuGet package functionality as a web service.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm (v7 or later)
- Angular CLI (v18 or later)
- ScaffNetAPI running locally or in a remote environment

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/robk99/ScaffNetAngular.git
   cd scaffnet-angular
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the backend API URL:
   - Open `src/environments/environment.ts`
   - Update the `apiUrl` value to point to your ScaffNetAPI instance

4. Start the development server:
   ```bash
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## Usage

1. Toggle between dark and light modes using the sun/moon icon in the header
2. Enter a project name in the "Solution Name" field
3. Enter a project path in the "Solution Path" field
4. Click "Create" to generate a new clean architecture project

## Technologies Used

- **Angular 18**: Modern web framework
- **Tailwind CSS**: Utility-first CSS framework
- **ngx-toastr**: Toast notifications
- **RxJS**: Reactive programming library

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [ScaffNet](https://www.nuget.org/packages/ScaffNet) - The underlying code generation tool
- [ScaffNetAPI](https://github.com/robk99/ScaffNetAPI) - The backend API service
