      // Sample feedback data for demonstration
        let feedbackData = [
            {
                id: 1,
                content: "The new online learning platform is difficult to navigate...",
                status: "new",
                category: "Academic",
                timestamp: "2 hours ago"
            },
            {
                id: 2,
                content: "The library needs more study spaces during exam periods...",
                status: "reviewing",
                category: "Campus Life",
                timestamp: "5 hours ago"
            },
            {
                id: 3,
                content: "The WiFi connection in the computer lab is very slow...",
                status: "resolved",
                category: "Technology",
                timestamp: "1 day ago"
            },
            {
                id: 4,
                content: "The cafeteria food quality has declined recently...",
                status: "new",
                category: "Facilities",
                timestamp: "1 day ago"
            }
        ];

        // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const status = this.dataset.status;
                const feedbackItems = document.querySelectorAll('.feedback-item');
                
                feedbackItems.forEach(item => {
                    if (status === 'all' || item.dataset.status === status) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Update stats
                updateStats();
            });
        });

        // Search functionality
        document.querySelector('.search-box').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const feedbackItems = document.querySelectorAll('.feedback-item');
            
            feedbackItems.forEach(item => {
                const content = item.querySelector('.feedback-content').textContent.toLowerCase();
                if (content.includes(searchTerm)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

        // Action button functionality
        document.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const action = this.textContent.trim();
                
                // Add visual feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Here you would implement the actual functionality
                console.log(`Action: ${action}`);
                
                // For demonstration, show an alert
                if (action === 'Review' || action === 'Update Status') {
                    alert(`${action} functionality would be implemented here`);
                }
            });
        });

        // Quick actions functionality
        document.querySelectorAll('.quick-action').forEach(action => {
            action.addEventListener('click', function() {
                const actionName = this.querySelector('h4').textContent;
                console.log(`Quick action: ${actionName}`);
                alert(`${actionName} functionality would be implemented here`);
            });
        });

        // Update statistics
        function updateStats() {
            const visibleItems = document.querySelectorAll('.feedback-item[style="display: block"], .feedback-item:not([style])');
            const total = document.querySelectorAll('.feedback-item').length;
            const pending = document.querySelectorAll('.feedback-item[data-status="new"]').length;
            const resolved = document.querySelectorAll('.feedback-item[data-status="resolved"]').length;
            
            // Update the stat cards (this would be connected to real data in production)
            console.log(`Visible: ${visibleItems.length}, Total: ${total}, Pending: ${pending}, Resolved: ${resolved}`);
        }

        // Initialize
        updateStats();
        
        // Auto-refresh simulation (in real app, this would fetch new data)
        setInterval(() => {
            // This would update the dashboard with new feedback
            console.log('Checking for new feedback...');
        }, 30000); // Check every 30 seconds