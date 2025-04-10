document.getElementById('getWeatherBtn').addEventListener('click', function() {
            const city = document.getElementById('cityInput').value;
            const apiKey = 'e2799faeefeca4c446b77fd9ca8d01b3'; 
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        document.getElementById('cityName').innerText = `Weather in ${data.name}`;
                        document.getElementById('weatherCondition').innerText = `Condition: ${data.weather[0].description}`;
                        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                        document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;

                        document.getElementById('weatherResult').classList.remove('hidden');
                    } else {
                        alert('City not found!');
                    }
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    alert('Failed to fetch weather data. Please try again later.');
                });
        });
